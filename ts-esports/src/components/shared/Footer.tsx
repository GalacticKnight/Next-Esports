import React from 'react';
import Link from 'next/link';
const Footer = () => {
    return (
        <footer>
            
            <div className="footer-top">
                
                <div className="container">
                    <div className="footer-brand-wrapper">
                        <div className="footer-menu-wrapper">
                            <ul className="footer-menu-list">
                                <li>
                                    <a href="#hero" className="footer-menu-link">Home</a>
                                </li>
                                <li>
                                    <a href="#about" className="footer-menu-link">About</a>
                                </li>
                                <li>
                                    <a href="#" className="footer-menu-link">Contact</a>
                                </li>
                                <li>
                                    <Link href='/history' className="footer-menu-link">Special Thanks</Link>
                                    {/* <a href="" className="footer-menu-link">Special Thanks</a> */}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <br/>
                </div>
            </div>
        </footer>
    );
}

export default Footer;