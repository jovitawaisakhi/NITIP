import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import appLogo from '../../assets/AppLogo.png';
import dropdown from '../../assets/dropdown.png';
import './HeaderFooter.css';
import UserDropdownMenu from './UserDropdownMenu';

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
                    <UserDropdownMenu/>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
