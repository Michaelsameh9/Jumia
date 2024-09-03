import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, incrementQuantity, decrementQuantity } from './cartSlice';
import { Container, Row, Col } from 'react-bootstrap';
import "./cart.css";
import cat from "./images/cart/cart.png";
import logo from "./images/LOGO GUMYA EXPRESS.png";
import { MdOutlineDelete } from "react-icons/md";
import { Helmet } from "react-helmet";


const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  return (
    <>
      <Container >
      <Helmet>
          <meta charSet="utf-8" />
          <title>Cart</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        {cart.items.length === 0 ? (
          <Row className='cart-container'>
            <Col className='cart-empty'>
              <img src={cat} className='cart2' alt='cart' />
              <h6>Your cart is empty!</h6>
              <p>Browse our categories and discover our best deals!</p>
              <Link to="/" className='btn-shopping'>START SHOPPING</Link>
            </Col>
          </Row>
        ) : (
          <>
            <div className='cart-full'>
              <p className='header-cart'>Cart({cart.totalQuantity})</p>
              <Row>
                {cart.items.map((item) => (
                  <Col key={item.id} lg={12}>
                    <div className='card-cart'>
                      <Link to={`/detail/${item.id}`} className='card-link'>
                        <img className='img-cart' src={item.img} alt='img-product' />
                      </Link>
                      <p className='cart-title'>{item.title2}</p>
                      <div className='cart-logo'>
                        <img src={item.logo} alt="jumia express" className={item.express} />
                      </div>
                      <button className='btn-remove' onClick={() => handleRemove(item.id)}><MdOutlineDelete style={{ fontSize: "22px" }} />REMOVE</button>
                      <div className='cart-money'>
                        <p className='cart-price'>EGP{item.price.toFixed(2)}</p>
                        <del className='cart-del'>{item.prevprice}</del>
                        <p className='cart-sales'>{item.sale}</p>
                        <div className="btn-cart">
                          <button className='btn-mins' onClick={() => handleDecrement(item.id)} disabled={item.quantity <= 1}>-</button>
                          <span className='btn-num' >{item.quantity}</span>
                          <button className='btn-plus' onClick={() => handleIncrement(item.id)}>+</button>
                        </div>
                      </div>
                      {/* <Card.Text>Total Price: {item.totalPrice.toFixed(2)}</Card.Text> */}
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
            <div className='CART-SUMMARY'>
              <div className='summary-header'>
                <p className='p-headersumm' >CART SUMMARY</p>
              </div>
              <div className='check-body'>
                <span className='p-Subtotal'>Subtotal</span>
                <h5 className='h-price'>EGP{cart.totalPrice.toFixed(2)}</h5>
              </div>
              <div className='check-body2'>
                <span className='span-cart2'>Missing EGP 11.00 to reach free delivery</span>
                <img src={logo} alt='logo JUMIA' className='logo-ex' />
              </div>
              <div style={{ padding: '3%' }}>
                <button className='btn-check2'>CHECKOUT(EGP{cart.totalPrice.toFixed(2)})</button>
              </div>
            </div>
          </>
        )}
      </Container>
    </>
  );
};

export default Cart;
