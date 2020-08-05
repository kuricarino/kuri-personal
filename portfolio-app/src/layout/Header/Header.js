import React from 'react';
// import { Link } from 'react-router-dom';
// import magritte from '../../images/magritte-96.png';
import './Header.css';

function Header() {
    const [isActive, setisActive] = React.useState(false)

    return (
        <div className="hero-head">
            <nav className="navbar">
                <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item">
                        Kuri
                    </a>
                    <a
                        onClick={() => {
                        setisActive(!isActive)
                        }}
                        role='button'
                        className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
                        aria-label='menu'
                        aria-expanded='false'
                        data-target='navbarBasicExample'
                    >
                        <span aria-hidden='true'></span>
                        <span aria-hidden='true'></span>
                        <span aria-hidden='true'></span>
                    </a>
                </div>
                <div id="navbarMenuHeroA" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                    <div className="navbar-end">
                        <a className="navbar-item is-active">
                            Home
                        </a>
                        <a className="navbar-item">
                            Portfolio
                        </a>
                        {/* <a className="navbar-item">
                            Blog
                        </a> */}
                    </div>
                </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;