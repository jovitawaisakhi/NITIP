import React from 'react';
import foodImg from '../../../assets/hainan-rice.jpeg';
import addQty from '../../../assets/addQty.png';
import minusQty from '../../../assets/minusQty.png';
import line from '../../../assets/line.png';
import './Style.css';

const OrderBox: React.FC = () => {
    return (
        <div className="OrderBox">
            <div id="order-image">
                <img src={foodImg} alt="" />
            </div>
            <div id="order-info">
                <p id='food-name'>Hainan Rice</p>
                <p>25.000</p>
            </div>
            <div id="qty">
                <div className='manageQty'>
                    <img src={minusQty} alt="" />
                </div>
                <div id="numQty">
                    <p>1</p>
                    <img src={line} alt="" />
                </div>
                <div className='manageQty'>
                    <img src={addQty} alt="" />
                </div>
            </div>
        </div>
    );
};

export default OrderBox;