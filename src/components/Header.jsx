import React, {useState} from 'react';
import { NavLink, Link } from 'react-router-dom';
import Button from './Button';
import './Header.css'

const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(true)
    const mobileMenuToggle = () => {
        setMobileMenu(!mobileMenu);
    }
    return (
        <div className="header">
            <Link className="logo text-white" to='/'>DEV TASIR</Link>
            <nav className={`nav--links ${(mobileMenu ? '' : 'nav--links--active')}`}>
                <ul>
                    <li onClick={mobileMenuToggle}><NavLink activeClassName='active' className="links text-white" to='/'>Home</NavLink></li>
                    <li onClick={mobileMenuToggle}><NavLink activeClassName='active' className="links text-white" to='/projects'>Projects</NavLink></li>
                    <li onClick={mobileMenuToggle}><NavLink activeClassName='active' className="links text-white" to='/skills'>Skills</NavLink></li>
                    <li onClick={mobileMenuToggle}><NavLink activeClassName='active' className="links text-white" to='/hire'>Hire me</NavLink></li>
                    <li onClick={mobileMenuToggle}><NavLink activeClassName='active' className="links text-white" to='/course'>Course</NavLink></li>
                    <li onClick={mobileMenuToggle}><div className="mobile-button-container">
                        <Button text="Contact" path='/contact' btnStyle='btn btn-medium'></Button>
                    </div></li>
                </ul>
            </nav>
            <div className="button-container">
                <Button text="Contact" path='/contact' btnStyle='btn btn-medium'></Button>
            </div>
            <div className="menu-bar" onClick={mobileMenuToggle}><i class={`fas fa-${(mobileMenu) ? 'bars' : 'times'}`}></i></div>
        </div>
    );
};

export default Header;