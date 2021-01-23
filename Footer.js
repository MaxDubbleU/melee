import React from 'react';
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <h5 className="footer-subscription-heading">
                    Other Sites 
                </h5>
                <p className="footer-subscription-text">
                    <a href="https://clone-646be.web.app/">  Amazon Clone </a>   
                    <a href="https://insta-clone-471b5.web.app/">  Instagram Clone </a>   
                    <a href="https://nveralone.herokuapp.com/">  Never Alone(Social Media App)</a>
                </p>
            </section>
        </div>
    )
}

export default Footer
