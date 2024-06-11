import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import appLogo from '../../assets/AppLogo.png';
import dropdown from '../../assets/dropdown.png';
import './HeaderFooter.css';

const Navbar: React.FC = () => {
    const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);

    const toggleDropdown = (): void => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <nav>
            <Link to="/home">
                <div id='logo'>
                    <img src={appLogo} alt="App Logo" />
                </div>
            </Link>
            <div id='menu'>
                <button className="dropdown-button" onClick={toggleDropdown}>
                    <img src={dropdown} alt="" />
                </button>
                {dropdownVisible && (
                    <ul className="dropdown-menu">
                        <li><Link to="/cart">Cart</Link></li>
                        <li><Link to="/receiveOrder">Receive Order</Link></li>
                        <li><Link to="/finishOrder">Finish Order</Link></li>
                        <li><Link to="/restaurantDetail">Restaurant Detail</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/login">Logout</Link></li>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
