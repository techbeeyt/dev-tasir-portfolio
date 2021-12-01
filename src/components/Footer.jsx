import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
        <div className="divisor"></div>
        <div className='footer'>
            <span className="logo" to='/'>DEV TASIR</span>
            <p>Living, learning, & leveling up one day at a time.</p>
            <div className="social-icons">
                <ul>
                    <li><i class="fab fa-facebook-f"></i></li>
                    <li><i class="fab fa-twitter"></i></li>
                    <li><i class="fab fa-instagram"></i></li>
                    <li><i class="fab fa-tumblr"></i></li>
                    <li><i class="fab fa-youtube"></i></li>
                </ul>
            </div>
                <div className="copyright"><span>Made by me <i class="far fa-copyright"></i> 2022</span></div>
        </div>
        </>
    );
};

export default Footer;