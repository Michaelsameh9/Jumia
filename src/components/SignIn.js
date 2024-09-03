// src/SignIn.js
import React, { useState } from 'react';
import "./signIn.css";
import { Container, Row } from 'react-bootstrap';
import { FaStar } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import logoJumia from "./images/Jumia-Logo2.png";
import { Helmet } from "react-helmet";


const SignIn = () => {
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [isFacebook, setIsFacebook] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // هنا يمكنك التعامل مع البيانات المرسلة، مثل إرسالها إلى API
        console.log('Email/Phone:', emailOrPhone);
        if (isFacebook) {
            // التعامل مع تسجيل الدخول عبر فيسبوك هنا
            console.log('Login with Facebook');
        } else {
            // التعامل مع تسجيل الدخول التقليدي هنا
            console.log('Traditional login');
        }
    };

    const handleFacebookLogin = () => {
        // هنا يمكنك إضافة اللوجيك الخاص بتسجيل الدخول عبر فيسبوك
        window.location.href = "https://www.facebook.com/v12.0/dialog/oauth?client_id=YOUR_FACEBOOK_APP_ID&redirect_uri=YOUR_REDIRECT_URI";
    };

    return (
        <Container className="sign-in-container">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Jumia</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Row>
                <div >
                    <div className='star-icon3'>
                        <FaStar className='star3' />
                    </div>
                    <p className='p-sign'>
                        Welcome to Jumia
                    </p>
                    <p className='p-sign2'>
                        Type your e-mail or phone number to log in or create a Jumia account.
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input
                                type="text"
                                placeholder="Email or Mobile Number*"
                                value={emailOrPhone}
                                onChange={(e) => setEmailOrPhone(e.target.value)}
                                required
                            />
                        </div>
                        <button className='Continue' type="submit" onClick={() => setIsFacebook(false)}>Continue</button>
                        <span className='s-Continue'>By continuing you agree to Jumia’s</span>
                        <span className='link-Continue'>Terms and Conditions</span>
                        <div className="facebook-login">
                            <button type="button" onClick={handleFacebookLogin}><ImFacebook2 className='icon-facebook' />Log in with Facebook</button>
                        </div>
                        <p className='p-Continue'>
                            For further support, you may visit the Help Center or contact our customer service team.
                        </p>
                    </form>
                    <img src={logoJumia} alt='Jumia' className='logo-sign' />
                </div>
            </Row>
        </Container>
    );
};

export default SignIn;