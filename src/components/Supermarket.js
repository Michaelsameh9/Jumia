import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/Supermarket.css";
import { Col, Container, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import banner1 from "../components/images/home/nocach.png";
import { Sec1, Sec2, Sec3 } from "./menu";

import Filter from './test';
import ProductList from './test2';
import{categories,brands} from "./Data";
import { Helmet } from "react-helmet";


const Supermarket = () => {
  const [setSwiperRef] = useState(null);
  const [filters, setFilters] = useState({
    sort: null,
    category: '',
    brands: [],
    rating: [],
    discount: false,
    priceRange: [0, 7134],
  });

  const handleFilterChange = (newFilters) => {
    setFilters(prevFilters => ({ ...prevFilters, ...newFilters }));
  };

  return (
    <>
      <Container className='home-page'>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Buy Groceries Online - Affordable Price, Best Selection</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Row >
          <Col >
            <div className='sec-1'>
              <p className='p-title2'>
                Appliance Up Your Summer Home
              </p>
              <div style={{ display: "flex" }}>
                {Sec1.map((e) =>
                  <div className='card-sec' key={e.id}>
                    <a href={e.link}>
                      <img src={e.image} alt='card' className='img-sec' />
                    </a>
                  </div>
                )}
              </div>
              <div style={{ display: "flex" }}>
                {Sec2.map((c) =>
                  <div className='card-sec' key={c.id}>
                    <a href={c.link}>
                      <img src={c.image} alt='card' className='img-sec' />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='card5'>
              <div className='head1'>
                <p className='p-head1'>
                  Top Picks
                </p>
              </div>
              <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={6}
                centeredSlides={true}
                spaceBetween={1}
                pagination={{
                  type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {Sec3.map((a) =>
                  <SwiperSlide>
                    <div className='section-1'>
                      <a href='/' className='a-sale'>
                        <div key={a.id}>
                          <img src={a.image} alt={a.alt} className='bg-card1' />
                          <p className='sale'>{a.sale}</p>
                        </div>
                        <div style={{ paddingLeft: '6%' }}>
                          <p className='title'>{a.title}</p>
                          <p className='price'>{a.price}</p>
                          <p className='price-befor-sale'>{a.befor}</p>
                        </div>
                      </a>
                    </div>
                  </SwiperSlide>
                )}
              </Swiper>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='card4'>
              <div>
                <a href='/banner2'>
                  <img src={banner1} alt='nocash' className='beko' />
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='supermarket'>
              <Filter
                onFilterChange={handleFilterChange}
                categories={categories}
                brands={brands}
                maxPrice={7134}
              />
              <ProductList filters={filters}/>
            </div>
          </Col>
        </Row>

      </Container>
    </>
  )
}


export default Supermarket;