import React from 'react';
import { Link } from 'react-router-dom';
import menuImg from '../../../assets/hainan-rice.jpeg';
import Edit from '../../../assets/edit.png';
import Remove from '../../../assets/remove.png';

const MenuBox: React.FC = () => {
    return (
        <div className="MenuBox">

            <div id="menu-image">
                <img src={menuImg} alt="" />
            </div>

            <div id="menu-info">
                <div id='food-info'>
                    <label id='food-name'>Hainan Rice</label>
                    <label id='food-desc'>Hainan Rice with Steamed Chicken</label>
                </div>
                <div>
                    <label id='food-price'>25.000</label>
                </div>
            </div>
            
            <div id="manageFood">
                <Link to="/menuDetail">
                    <div id='edit'>
                        <img src={Edit} alt="" />
                    </div>
                </Link>
                <div id='remove'>
                    <img src={Remove} alt="" />
                </div>
            </div>

        </div>
    );
};

export default MenuBox;