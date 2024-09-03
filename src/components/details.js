import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, incrementQuantity, decrementQuantity, removeFromCart } from './cartSlice';
import { allProducts, countries } from './Data'; // استيراد بيانات المنتجات
import { Col, Container, Row } from 'react-bootstrap';
import { FaRegHeart } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { LiaCartPlusSolid } from "react-icons/lia";
import { FaShieldHalved } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { GiCardPickup } from "react-icons/gi";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiReturnArrow } from "react-icons/gi";
import { ImFileText2 } from "react-icons/im";
import { IoIosList } from "react-icons/io";
import { MdOutlineFeedback } from "react-icons/md";
import { Link } from 'react-scroll';
import { IoChevronDown } from "react-icons/io5";
import logo from "./images/LOGO GUMYA EXPRESS.png";
import "./details.css";
import { Helmet } from "react-helmet";


const Details = () => {
    const { id } = useParams(); // الحصول على ID المنتج من معلمات URL
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.items);
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const [notification, setNotification] = useState(""); // حالة لإظهار الإشعار
    const [country, setCountry] = useState('---country---');
    const [state, setState] = useState('---state---');
    const [states, setStates] = useState([]);




    // العثور على المنتج بناءً على ID من معلمات URL
    const product = allProducts.find((p) => p.id === parseInt(id, 10));

    if (!product) {
        return <div>Product not found</div>;
    }



    const handleAddToCart = () => {
        dispatch(addToCart(product));
        setIsAddedToCart(true);
        setNotification(`Product added successfully`); // Set notification message
        setTimeout(() => setNotification(""), 3000); // Clear notification after 3 seconds
    };

    const handleIncrement = () => {
        dispatch(incrementQuantity(product.id));
        setNotification(`Product added successfully`);
        setTimeout(() => setNotification(""), 3000);
    };

    const handleDecrement = () => {
        dispatch(decrementQuantity(product.id));
        setNotification(`Item quantity has been updated`);
        setTimeout(() => setNotification(""), 3000);
    };

    const handleRemove = () => {
        dispatch(removeFromCart(product.id));
        setIsAddedToCart(false);
        setNotification(`Product was removed from cart successfully`);
        setTimeout(() => setNotification(""), 3000);
    };

    const isProductInCart = cart.some(item => item.id === product.id);
    const quantity = isProductInCart ? cart.find(item => item.id === product.id).quantity : 0;


    const changeCountry = (event) => {
        setCountry(event.target.value);
        setStates(countries.find(crt => crt.name === event.target.value).state)
    }

    const changeState = (event) => {
        setState(event.target.value);
    }

    return (
        <>
            <Container >
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{product.title2}</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
                <Row>
                    <Col lg="9">
                        {notification && <div className='notification2'><IoMdCheckmark />{notification}</div>}  {/* Show notification */}
                        <div className='details-container'>
                            <div className='section-one'>
                                <div className='img-bord'>
                                    <img src={product.img} className='details-img' alt='img-product' />
                                </div>
                                <p className='details-share'>SHARE THIS PRODUCT</p>
                                <div>
                                    <a href='/'>
                                        <CiFacebook className='icon-fa' />
                                    </a>
                                    <a href='/'>
                                        <TiSocialTwitterCircular className='icon-tw' />
                                    </a>
                                </div>
                                <p className='span-link'>Report incorrect product information</p>
                            </div>
                            <div className='section-two'>
                                <div className='titel-details'>
                                    <div className='header-details2'>
                                        <div className='header-details'>
                                            <span className={product.class}>{product.title1}</span>
                                        </div>
                                    </div>
                                    <div className='like-product2'>
                                        <FaRegHeart className='icon-like2' />
                                    </div>
                                    <p className='card-detalis2'>{product.title2}</p>
                                    <p>Brand: <a className='link-brand' href='/'>{product.brand}</a></p>
                                </div>
                                <div className='titel-details2'>
                                    <div className='money'>
                                        <p className='price-now'>EGP{product.price.toFixed(2)}</p>
                                        <del className='del-details'>{product.prevprice}</del>
                                        <p className='sales2'>{product.sale}</p>
                                    </div>
                                    <div>
                                        <p className='star2'>{product.star}</p>
                                    </div>
                                    <div>
                                        {isAddedToCart ? (
                                            <div className='cart-controls'>
                                                <button className='btn-mins2' onClick={handleDecrement} disabled={quantity <= 1}>-</button>
                                                <span className='btn-num2'>{quantity}</span>
                                                <button className='btn-plus' onClick={handleIncrement}>+</button>
                                                <button className='btn-remove2' onClick={handleRemove}>REMOVE</button>
                                            </div>
                                        ) : (
                                            <button className='add-cart' onClick={handleAddToCart}><LiaCartPlusSolid className='icon-cartde' />ADD TO CART</button>
                                        )}
                                    </div>
                                </div>
                                <p className='details-share'>PROMOTIONS</p>
                                <a className='link-buy' href='/'>
                                    <span>
                                        <FaShieldHalved className='icon-shield' />
                                    </span>Buy Now, Pay Later with 0% interest installments plans</a>

                                <a href='/' className='link-buy'>
                                    <FaTelegramPlane className='icon-tele' />
                                    Enjoy Free Shipping Nationwide</a>
                            </div>
                        </div>
                    </Col>
                    <Col lg="3">
                        <div className='section-details2'>
                            <div className='header-delicery'>
                                <p className='p-delicery'>DELIVERY & RETUTENS </p>
                            </div>
                            <div className='header-delicery'>
                                <img src={logo} alt='jumia-express' className='jumia-express' />
                                <p className='delivery'>Express delivery in main cities.<span className='s-delivery'>Details</span></p>
                            </div>
                            <div className='header-delicery'>
                                <p className='p-delicery2'>Choose your location</p>
                                <div>
                                    <div className='loction'>
                                        <select className='form-control' value={country} onChange={changeCountry}>
                                            <option>Please select</option>
                                            {countries.map((crt) => (
                                                <option value={crt.name}>{crt.name}</option>
                                            ))}
                                        </select>
                                        <br />
                                        <select className='form-control' value={state} onChange={changeState}>
                                            <option>Please select</option>
                                            {states.map((state) => (
                                                <option value={state.name}>{state.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <div className='delivery2'>
                                            <div className='icon-pickup'>
                                                <GiCardPickup className='pickup' />
                                            </div>
                                            <p className='p-pickup'>Pickup Station</p>
                                            <span className='link-details'>Details</span>
                                            <span className='s-free'>Free delivery</span>
                                        </div>
                                        <p className='details-order'>Pickup by <span className='span-date'>01 September</span>  when you order within next <span className='span-date'>18hrs 29mins</span></p>
                                        <div className='delivery2'>
                                            <div className='icon-pickup'>
                                                <CiDeliveryTruck className='icon-delivery' />
                                            </div>
                                            <p className='p-pickup'>Door Delivery</p>
                                            <span className='link-details'>Details</span>
                                        </div>
                                        <p className='details-Delivery'>Delivery<span className='span-date'> EGP 35.00 </span> (free delivery if order above EGP 200.00)</p>
                                        <p className='details-Delivery2'>Pickup by <span className='span-date'>01 September</span>  when you order within next <span className='span-date'>18hrs 29mins</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className='section-return'>
                                <div className='delivery2'>
                                    <div className='icon-pickup'>
                                        <GiReturnArrow className='icon-delivery' />
                                    </div>
                                    <p className='p-pickup'>Return Policy</p>
                                </div>
                                <p className='details-Delivery'>Free return within the legal return period from 14 to 30 days, and if they meet the terms & conditions, with the need to report any apparent defect within 48 hours. For more details about return policy.Details</p>
                            </div>
                        </div>
                        <div className='section-details2'>
                            <div>
                                <div className='header-delicery'>
                                    <p className='p-delicery'>SELLER INFORMATION</p>
                                </div>
                                <p className='p-jumia'>Jumia</p>
                                <p className='details-Delivery3'><span className='span-date'>100%</span> Seller Score</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg="9">
                        <div className='details-container2'>
                            <div className='Product-details'>
                                <div className='header-delicery'>
                                    <p className='p-details' id="details">Product details</p>
                                </div>
                                <p className='details3'>
                                    Garnier’s Light Face Wash is a gentle, yet effective wash, suited for all skin types. Use this product to remove impurities, nourish your skin and keep it soft, bright with a unifies skin tone and youthful. Garnier uses fruit extracts that are packaged in a way so that none of the nutrients are lost. This means your skin is getting all nature’s wonders in a convenient 100g wash. Say goodbye to blackheads and enlarged pores when you take on a daily facial wash regime. Use this Garnier product as the primary ingredient. In order to have a clear, supple and radiant complexion, it is of the utmost importance to give your skin all the nutrients it needs to be its best. That’s not all; keep your skin moisturized to ward off dry and scaly textures. Environmental factors play a huge role in the state of your skin. Natural fruit essences that keep your skin cleansed and nourished, as well as protected against free radicals.
                                    <br />
                                    <span className='span-date'>
                                        How to use:
                                    </span>
                                    <br />
                                    1-Gently massage onto wet face.
                                    <br />
                                    2-Rinse with water.
                                    <br />
                                    3-All done, Skin is perfectly clear and bright!
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg="9">
                        <div className='details-container2'>
                            <div className='Product-details'>
                                <div className='header-delicery'>
                                    <p className='p-details' id="Specifications">Specifications</p>
                                </div>
                                <div className='Specifications'>
                                    <div className='Key-Features'>
                                        <div className='title-Features'>
                                            Key Features
                                        </div>
                                        <div className='Features-details'>
                                            <ul className='list-Features'>
                                                <li>
                                                    Fast Bright face wash.
                                                </li>
                                                <li>
                                                    Garnier Fast Bright face wash is an effective daily face wash that helps you recover a clear, radiant, even and bright complexion with a unified skin tone.
                                                </li>
                                                <li>
                                                    Enriched with purifying agents.
                                                </li>
                                                <li>
                                                    It has a unique double action.
                                                </li>
                                                <li>
                                                    It purifies pores for deep-down cleansing without grains.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='Key-Features'>
                                        <div className='title-Features'>
                                            SPECIFICATIONS
                                        </div>
                                        <div className='Features-details'>
                                            <div className='specifications'>
                                                <p><span className='span-spec'>SKU</span>: GA737ST0GKUWONAFAMZ</p>
                                                <p><span className='span-spec'>Model</span>: 3061376204239</p>
                                                <p><span className='span-spec'>Color</span>: White</p>
                                                <p><span className='span-spec'>Main Material</span>: White</p>
                                                <p><span className='span-spec'>Shop Type</span>: Jumia Mall</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg="9">
                        <div className='details-container2'>
                            <div className='Product-details'>
                                <div className='header-delicery'>
                                    <p className='p-details' id="Feedback">Verified Customer Feedback</p>
                                    <a href='/' className='see-all2'>
                                        SEE ALL <IoChevronDown className='icon-see2' />
                                    </a>
                                </div>
                                <div className='product-feedback'>
                                    <div className='product-feedback1'>
                                        <p className='p-Verified'>
                                            VERIFIED RARINGS(81)
                                        </p>
                                        <div className='Verified'>
                                            <p className='p-Verified2'>
                                                {product.rating}/5
                                            </p>
                                            <p>
                                                {product.star}
                                            </p>
                                            <p>
                                                Verified Ratings (81)
                                            </p>

                                        </div>
                                    </div>
                                    <div className='product-feedback2'>
                                        <p className='p-Verified'>
                                            PRODUCT REVIWE(5)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg="3" >
                        <div className='stek'>
                            <div className='section-details3'>
                                <nav>
                                    <Link to="details" smooth={true} offset={-90} duration={500} className='nav-item'>
                                        <ImFileText2 className='icon-linkDetails' />
                                        Product details
                                    </Link>
                                    <Link to="Specifications" smooth={true} offset={-90} duration={500} className='nav-item'>
                                        <IoIosList className='icon-linkDetails' />
                                        Specifications
                                    </Link>
                                    <Link to="Feedback" smooth={true} offset={-120} duration={500} className='nav-item'>
                                        <MdOutlineFeedback className='icon-linkDetails' />
                                        Verified Customer Feedback
                                    </Link>
                                </nav>
                            </div>
                            <div className='section-details4'>
                                <div style={{ display: "flex" }}>
                                    <div className='img-bord2'>
                                        <img src={product.img} className='details-img2' alt='img-product' />
                                    </div>
                                    <p className='card-detalis3'>{product.title2}</p>
                                    <p className='price-now2'>EGP{product.price.toFixed(2)}</p>
                                    <del className='details-del'>{product.prevprice}</del>
                                    <p className='details-sales'>{product.sale}</p>
                                </div>
                                <div>
                                    {isAddedToCart ? (
                                        <div className='cart-controls2'>
                                            <button className='btn-mins2' onClick={handleDecrement} disabled={quantity <= 1}>-</button>
                                            <span className='btn-num2'>{quantity}</span>
                                            <button className='btn-plus' onClick={handleIncrement}>+</button>
                                            <button className='btn-remove2' onClick={handleRemove}>REMOVE</button>
                                        </div>
                                    ) : (
                                        <button className='add-cart2' onClick={handleAddToCart}><LiaCartPlusSolid className='icon-cartde' />ADD TO CART</button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Details;
