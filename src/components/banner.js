import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/banner.css"
import { Col, Container, Row } from 'react-bootstrap';
import banner from "./images/banner.png";
import { FaStar } from "react-icons/fa";
export default function Banner() {
  return (
    <>
      <Container className='banner'>
        <Row>
          <Col>
            <a href='/'>
              <img src={banner} alt='banner' />
            </a>
          </Col>
        </Row>
        <Row className='section-2'>
          <Col lg={4} style={{padding:"0%"}}>
          <div>
            <a href='/' className='link-banner'>
            <div className='star-icon'>
            <FaStar className='star'/>
            </div>
            Sell on Jumia </a>
          </div>
          </Col>
          <Col lg={4}>
          
          </Col>
          <Col lg={4}>
          
          </Col>
        </Row>
      </Container>
    </>
  )
}
