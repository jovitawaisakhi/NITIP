import React from 'react';
import './Style.css';
import foodImg from '../../../assets/hainan-rice.jpeg'

const OrderHistoryBox: React.FC = () => {

    return (
        <div className="OHBox">
            <div id="oh-image">
                <img src={foodImg} alt="" />
            </div>
            <div id="oh-info">
                <p id='resto-name'>Xiao Kee</p>
                <p id='date'>1 Juni 2024  10.48 AM</p>
            </div>
            <div id="oh-status">
                <p>Selesai</p>
            </div>
        </div>
    );
};

export default OrderHistoryBox;