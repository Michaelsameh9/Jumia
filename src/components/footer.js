import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, } from 'react-bootstrap';
import "../components/footer.css";
import { MdEmail } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaApple } from "react-icons/fa6";
import { FaGooglePlay } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiInstagram } from "react-icons/tfi";
import { FaYoutube } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { RiMastercardFill } from "react-icons/ri";
import { RiVisaLine } from "react-icons/ri";
import { FaBaseball } from "react-icons/fa6";
import logo2 from "../components/images/Jumia-Logo.png";




export default function Footer() {
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [errors, setErrors] = useState({});

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        validateEmail(event.target.value);
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handleCheckChange = (event) => {
        setIsChecked(event.target.checked);
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!re.test(email)) {
            setErrors({ ...errors, email: 'Please enter a valid email address' });
        } else {
            setErrors({ ...errors, email: '' });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Additional validation (if needed)
        if (!gender) {
            setErrors({ ...errors, gender: 'Please select a gender' });
        } else {
            setErrors({ ...errors, gender: '' });
        }

        // Check for errors before submitting the form
        if (Object.keys(errors).length === 0) {
            console.log('Email:', email);
            console.log('Gender:', gender);
            console.log('Check:', isChecked);
        }
    };
    return (
        <>
            <Container fluid className='footer'>
                <Row className='footer1'>
                    <Col>
                       <img src={logo2} alt='logo' className='logo-ftr'/>
                    </Col>
                    <Col lg={6}>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <p className='p-ftr1'>NEW TO JUMIA?</p>
                                <p className='p-ftr2'>Subscribe to our newsletter to get updates on our latest offers!</p>
                                <label htmlFor="email"></label>
                                <input
                                    type="email"
                                    placeholder=" Enter E-mail Address"
                                    id="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                                <MdEmail className='icon-ftr1' />
                                {errors.email && <p className="error">{errors.email}</p>}
                            </div>
                            <div htmlFor="gender" style={{ marginLeft: "50%" }}>
                                <div>
                                    <button
                                        className='btn-male'
                                        type="radio"
                                        id="male"
                                        value="Male"
                                        name="gender"
                                        checked={gender === 'Male'}
                                        onChange={handleGenderChange}
                                        htmlFor="male">MALE</button>
                                    <button
                                        className='btn-female'
                                        type="radio"
                                        id="female"
                                        value="Female"
                                        name="gender"
                                        checked={gender === 'Female'}
                                        onChange={handleGenderChange}
                                        htmlFor="female"
                                    >FEMALE</button>
                                </div>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="check"
                                    checked={isChecked}
                                    onChange={handleCheckChange}
                                />
                                <label htmlFor="check" className='check'>I agree to Jumia’s Privacy and Cookie Policy. You can unsubscribe from newsletters at any time.</label>
                                <a href='/' className='link-ftr'>I accept the Legal Terms</a>
                            </div>
                        </form>
                    </Col>
                    <Col>
                        <div style={{ display: "flex" }}>
                            <div className='icon-ftr2'>
                                <div className='icon-ftr2plus'>
                                    <FaStar className='icon-star' />
                                </div>
                            </div>
                            <p className='p-ftr3'>DOWNLOAD JUMIA FREE APP</p>
                        </div>
                        <span className='spn-ftr1'>Get access to exclusive offers!</span>
                        <div>
                            <div className='app'>
                                <FaApple className='icon-app' />
                                <p className='span-app'>Download on the</p>
                                <p className='p-app'>App store</p>
                            </div>
                            <div className='play'>
                                <FaGooglePlay className='icon-app' />
                                <p className='span-app'>Get it on</p>
                                <p className='p-app'>Google Play</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='footer2'>
                    <Col>
                        <ul className='link-ftr2'>
                            <p className='title-ftr'>NEED HELP?</p>
                            <li><a href='/'>Chat with us</a></li>
                            <li><a href='/'>Help Center</a></li>
                            <li><a href='/'>Contact us</a></li>
                        </ul>
                        <ul className='link-ftr2'>
                            <p className='title-ftr'>USEFUL LINKS:</p>
                            <li><a href='/'>How to shop on Jumia?</a></li>
                            <li><a href='/'>How to pay on Jumia?</a></li>
                            <li><a href='/'>Delivery timelines</a></li>
                            <li><a href='/'>Dispute Resolution Policy</a></li>
                            <li><a href='/'>Return & Refund Policy</a></li>
                            <li><a href='/'>Payment Information Guidelines</a></li>
                        </ul>
                        <ul className='link-ftr3'>
                            <p className='title-ftr'>JOIN US ON</p>
                            <li><a href='/'><FaFacebookF /></a></li>
                            <li><a href='/'><FaTwitter /></a></li>
                            <li><a href='/'><TfiInstagram /></a></li>
                            <li><a href='/'><FaYoutube /></a></li>
                        </ul>
                    </Col>
                    <Col>
                        <ul className='link-ftr2'>
                            <p className='title-ftr'>ABOUT JUMIA EGYPT</p>
                            <li><a href='/'>Jumia Logistics Services</a></li>
                            <li><a href='/'>Jumia Careers</a></li>
                            <li><a href='/'>Terms and Conditions</a></li>
                            <li><a href='/'>Stores Credit Terms & Conditions</a></li>
                            <li><a href='/'>Privacy Policy</a></li>
                            <li><a href='/'>Cookies  Policy</a></li>
                            <li><a href='/'>Free Shipping</a></li>
                            <li><a href='/'>Flash Sales</a></li>
                            <li><a href='/'>Join the Jumia DA Academy</a></li>
                        </ul>
                        <ul className='link-ftr4'>
                            <p className='title-ftr'>PAYMENT METHODS</p>
                            <li><a href='/'><GiReceiveMoney /></a></li>
                            <li><a href='/'><RiMastercardFill /></a></li>
                            <li><a href='/'><RiVisaLine /></a></li>
                            <li><a href='/' className='icon-ftr3'><FaBaseball />fawry</a></li>
                        </ul>
                    </Col>
                    <Col>
                        <ul className='link-ftr2'>
                            <p className='title-ftr'>MAKE MONEY WITH JUMIA</p>
                            <li><a href='/'>Sell on Jumia</a></li>
                            <li><a href='/'>Vendor Hub</a></li>
                            <li><a href='/'>Become a Logistics Service Partner</a></li>
                            <li><a href='/'>Become a Sales Consultant (J-Force )</a></li>
                        </ul>
                    </Col>
                    <Col>
                        <ul className='link-ftr5'>
                            <p className='title-ftr'>JUMIA INTERNATIONAL</p>
                            <li><a href='/'>Algeria</a></li>
                            <li><a href='/'>Ivory Coast </a></li>
                            <li><a href='/'>Ghana</a></li>
                            <li><a href='/'>Kenya</a></li>
                            <li><a href='/'>Morocco</a></li>
                        </ul>
                        <ul className='link-ftr6'>
                            <li><a href='/'>Nigeria</a></li>
                            <li><a href='/'>Senegal</a></li>
                            <li><a href='/'>Tunisia</a></li>
                            <li><a href='/'>Uganda</a></li>
                        </ul>
                    </Col>
                </Row>
                <Row className='footer2'>
                    <Col>
                        <ul className='link-ftr7'>
                            <li><a href='/'>Activ</a></li>
                            <li><a href='/'>ADIDAS</a></li>
                            <li><a href='/'>American Eagle</a></li>
                            <li><a href='/'>Andora</a></li>
                        </ul>
                    </Col>
                    <Col>
                        <ul className='link-ftr7'>
                            <li><a href='/'>Apple</a></li>
                            <li><a href='/'>Braun</a></li>
                            <li><a href='/'>Casio</a></li>
                            <li><a href='/'>Cottonil</a></li>
                        </ul>
                    </Col>
                    <Col>
                        <ul className='link-ftr7'>
                            <li><a href='/'>Defacto</a></li>
                            <li><a href='/'>Dejavu</a></li>
                            <li><a href='/'>Dice</a></li>
                            <li><a href='/'>Fresh</a></li>
                        </ul>
                    </Col>
                    <Col>
                        <ul className='link-ftr7'>
                            <li><a href='/'>Garnier</a></li>
                            <li><a href='/'>HP</a></li>
                            <li><a href='/'>Izor</a></li>
                            <li><a href='/'>Kady</a></li>
                        </ul>
                    </Col>
                    <Col>
                        <ul className='link-ftr7'>
                            <li><a href='/'>L'Oreal Paris</a></li>
                            <li><a href='/'>LC Waikiki</a></li>
                            <li><a href='/'>Lenovo</a></li>
                            <li><a href='/'>Maybelline New York</a></li>
                        </ul>
                    </Col>
                    <Col>
                        <ul className='link-ftr7'>
                            <li><a href='/'>Mesery</a></li>
                            <li><a href='/'>Mothercare</a></li>
                            <li><a href='/'>NIVEA</a></li>
                            <li><a href='/'>Nokia</a></li>
                        </ul>
                    </Col>
                    <Col>
                        <ul className='link-ftr7'>
                            <li><a href='/'>OPPO</a></li>
                            <li><a href='/'>Ravin</a></li>
                            <li><a href='/'>Samsung</a></li>
                            <li><a href='/'>SHEIN</a></li>
                        </ul>
                    </Col>
                    <Col>
                        <ul className='link-ftr7'>
                            <li><a href='/'>Sokany</a></li>
                            <li><a href='/'>Tornado</a></li>
                            <li><a href='/'>XIAOMI</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
