import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/header.css"
import { Col, Container, Navbar, Row, Form, Button, Badge ,} from 'react-bootstrap';
import { IoMdSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { BsTruck } from "react-icons/bs";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { MdOutlineShoppingCart } from "react-icons/md";
import Menutoggle from './menutoggle';
import logo2 from "../components/images/Jumia-Logo2.png";
import { useSelector } from 'react-redux'; // Import useSelector
import { BsChatLeftDots } from "react-icons/bs";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [opn, setOpn] = useState(false);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);


  return (
    <>
      <Container fluid className='header'>
        <Row>
          <Col lg={2} className='sec-header1'>
            <Navbar>
              <div>
                <Menutoggle />
              </div>
            </Navbar>
            <a href='/'>
              <img src={logo2} alt='logo' className='logo-header' />
            </a>
          </Col>
          <Col lg={6}>
            <Form className="d-flex">
              <IoMdSearch className='icon-search' />
              <Form.Control
                type="search"
                placeholder="Search products, brands and categories"
                className="me-2"
                aria-label="Search"
              />
              <Button className='btn-search'>SEARCH</Button>
            </Form>
          </Col>
          <Col lg={3} style={{ display: "flex" }}>
            <div className='dropdown'>
              <button className='btn-drop' onClick={() => setOpen(!open)}>
                <span>
                  <FaRegUser className='icon-drow' />
                </span>
                Account
                <span>
                  <FaAngleDown className='icon-drop' />
                </span>
              </button>
              {
                open &&
                <div className='inbox'>
                  <ul>
                    <div className='signin'>
                      <li className='sign'><a href='/sing-in' className='btn-sign'>SIGN IN</a></li>
                    </div>
                    <li><a href='/my-account'><FaRegUser className='icon-inbox' />My Account</a></li>
                    <li><a href='/my-orders'><BsTruck className='icon-inbox' />Orders</a></li>
                    <li><a href='/my-saved'><MdFavoriteBorder className='icon-inbox' />Saved Items</a></li>
                  </ul>
                </div>
              }
            </div>
            <div className='dropdown2'>
              <button className='btn-drop2' onClick={() => setOpn(!opn)}>
                <span>
                  <HiOutlineQuestionMarkCircle className='icon-help' />
                </span>
                Help
                <span>
                  <FaAngleDown className='icon-drop' />
                </span>
              </button>
              {
                opn &&
                <div className='inbox'>
                  <ul>
                    <li className='link-help'><a href='/Help-Center'>Help Center</a></li>
                    <li className='link-help'><a href='/Place-Order'>Place an Order</a></li>
                    <li className='link-help'><a href='/Pay-Order'>Pay for Your Order</a></li>
                    <li className='link-help'><a href='/Track-Order'>Track Your Order</a></li>
                    <li className='link-help'><a href='/Cancel-Order'>Cancel an Order</a></li>
                    <li className='link-help'><a href='/Create-Return'>Create a Return</a></li>
                    <div className='signin1'>
                      <li className='sign'><a href='/live-chat' className='btn-sign2'><BsChatLeftDots className='icon-chat'/> LIVE CHAT</a></li>
                    </div>
                  </ul>
                </div>
              }
            </div>
            <div className='cart'>
              <span>
                <a href='/cart' className='link-cart'>
                  <MdOutlineShoppingCart className='icon-cart' />
                  Cart
                  {totalQuantity > 0 && (
                    <Badge bg="danger" className='cart-badge'>{totalQuantity}</Badge>
                  )}
                </a>
              </span>
              <a href='/productlist ' style={{ visibility: "hidden" }}>product list</a>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
