import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    const [isActive, setisActive] = React.useState(false)

    return (
        <div className="hero-head" id="gradient">
            <nav className="navbar">
                <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item" id="title-name">
                        KURI
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
                        {/* <a className="navbar-item">
                            ♡
                        </a>
                        <a className="navbar-item">
                            Portfolio
                        </a> */}
                        {/* <a className="navbar-item">
                            Blog
                        </a> */}
                        <Link className="navbar-item has-text-weight-semibold" to='/'>♡</Link>
                        {/* <Link className="navbar-item has-text-weight-semibold" to='/profile'>Portfolio</Link> */}
                    </div>
                </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;