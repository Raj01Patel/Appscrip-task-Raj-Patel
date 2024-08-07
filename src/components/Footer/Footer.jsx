import React from 'react'
import './Footer.css'
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";



const Footer = () => {
    return (
        <footer className="footer">
            <div className="first-container">
                <div className="footer-left">
                    <p className="be-the-first">BE THE FIRST TO KNOW</p>
                    <p>Sign up for updates from mettä muse.</p>
                    <div className="subscribe-form">
                        <input type="email" placeholder="Enter your e-mail..." />
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
                <div className="footer-right">
                    <div>
                        <p className="contact-us">CONTACT US</p>
                        <p>+44 121 133 5360</p>
                        <p>customercare@mettamuse.com</p>
                    </div>
                </div>
            </div>

            <div className="second-container">
                <div className="left-footer">

                    <p className="metta-muse">metta muse</p>
                    <ul>
                        <li>About Us</li>
                        <li>Stories</li>
                        <li>Artisans</li>
                        <li>Boutiques</li>
                        <li>Contact Us</li>
                        <li>EU Compliances Docs</li>
                    </ul>
                </div>
                <div className="center-footer">
                    <p className="quick-links">Quick link</p>
                    <ul>
                        <li>Orders & Shipping</li>
                        <li>Join/Login as a Seller</li>
                        <li>Payment & Pricing</li>
                        <li>Return & Refunds</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
                <div className="right-footer">
                    <p className="follow-us">FOLLOW US</p>
                    <div className="social-icons">
                        <a href="https://github.com/Raj01Patel"><FaSquareGithub /></a>
                        <a href="https://www.linkedin.com/in/raj-patel-b3a5112aa/"><FaLinkedin /></a>
                    </div>
                    <p>metta muse ACCEPTS</p>
                    <div className="payment-icons">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYQ3uhlEkLwNJ9Y6kjLphe_irfN1i9H1pCMw&s" alt="Google Pay" />
                        <img src="https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/13674554/Mastercard_logo.jpg?quality=90&strip=all&crop=0,0,100,100" alt="MasterCard Pay" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeyP_0YtjGAPJnOyzHmO-qQ82oXl_v4nIoFw&s" alt="AMEX" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWxYUQvdwKXZ9meVu4Jx6fr7nNNo99TLl-bA&s" alt="Pay" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer