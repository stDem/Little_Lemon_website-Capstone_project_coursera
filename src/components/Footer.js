import React from 'react';
import logo from "../images/logo.svg";
import instagram from "../images/instagram.png";
import facebook from "../images/facebook.png";
import mail from "../images/mail.png";



const Footer = () => {
  return (
    <footer className="dark_background">
            <div className="container">
                <section className="footer_logo footer_contact link">
                    <a href="/" className="logo">
                      <img className='footer_logo' src={logo} alt="logo" />
                    </a>
                    <ul className='social-links'>
                        <li className="footer_contact_li">
                            <a href="instagram.com" target="_blank">
                                <img
                                    src={instagram}
                                    alt="Instagram icon"
                                />
                                Instagram
                            </a>
                        </li>

                        <li className="footer_contact_li">
                            <a href="facebook.com" target="_blank">
                                <img
                                    src={facebook}
                                    alt="facebook icon"
                                />
                                Facebook
                            </a>
                        </li>

                        <li className="footer_contact_li">
                            <a href="mailto:example@somewhere.com">
                                <img src={mail} alt="email icon" />
                                Email
                            </a>
                        </li>
                    </ul>
                </section>
                <section className="footer_links link">
                  <ul>
                      <li><a href="/">Home</a></li>
                      <li><a href="/">About</a></li>
                      <li><a href="/menu">Menu</a></li>
                      <li><a href="/booking">Book a table</a></li>
                      <li><a href="/">LogIn</a></li>
        
                  </ul>
                </section>

                <section className="footer_subscribe">
                    <h4>Subscribe to our Newsletter</h4>

                    <form action="">
                        <label htmlFor="email">Email Address:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                        />

                        <button className="orderbtn" type="submit">Subscribe</button>
                    </form>
                </section>
            </div>
        </footer>
  );
};

export default Footer;