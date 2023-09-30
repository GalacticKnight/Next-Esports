import React from 'react';
import Link from 'next/link';

const NavBar = () => {
    return (
        <header className="header">
            <div className="overlay" data-overlay></div>
                <div className="container">
                    <img src="/main_logo.png" alt="profile-img" className='logo-img'/>
                    <nav className="navbar" data-nav>   
                        <ul className="navbar-list">
                            <li>
                                <Link href='/#hero' className="navbar-link" >Home</Link>
                                {/* <a href="#hero" className="navbar-link">Home</a> */}
                            </li>
                            <li>
                                <Link href='/#about' className="navbar-link" >About</Link>
                            </li>
                            <li>
                                <Link href='/#contact' className="navbar-link">Contact</Link>
                            </li>
                            <li>
                                <a href="https://discord.gg/9WbP66DDJC" className="navbar-link">Discord</a>
                            </li>

                        </ul>
                    </nav>
                    <div className="header-actions">
                        <button className="btn-sign_in">
                        <span><a href="https://forms.gle/kVmB9CahkDHVXr796">Join Us</a></span>
                        </button>
                    </div>
                </div>
        </header>
    );
}

export default NavBar;