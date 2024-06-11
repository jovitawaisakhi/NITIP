import React from 'react';
import { Link } from 'react-router-dom';
import foodImg from '../../../assets/hainan-rice.jpeg';
import remove from '../../../assets/remove.png';
import './Style.css';

const CartBox: React.FC = () => {
    return (
        <Link to="/payment">
            <div className="CartBox">
                <div id="cart-image">
                    <img src={foodImg} alt="" />
                </div>
                <div id="cart-info">
                    <p id='resto-name'>Xiao Kee</p>
                    <p>1 item(s)</p>
                </div>
                <div id="removeCart">
                    <div id='remove'>
                        <img src={remove} alt="" />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CartBox;