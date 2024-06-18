import React from 'react';
import './Style.css';
import foodImg from '../../../assets/hainan-rice.jpeg'
import { TransactionInterface } from '../../../interfaces/Transaction';

interface OHBoxProps {
    data: TransactionInterface;
}

const OrderHistoryBox: React.FC<OHBoxProps> = ({data}) => {
    
    return (
        <div className="OHBox">
            <div id="oh-image">
                <img src={data.tenant?.linkProfile} alt="" />
            </div>
            <div id="oh-info">
                <p id='resto-name'>{data.tenant?.name}</p>
                {data.foods?.map((item) => (
                    <label id='food'>{item.foodName} {item.quantity}x</label>
                ))}
            </div>
            <div id="oh-status">
                <p>Selesai</p>
            </div>
        </div>
    );
};

export default OrderHistoryBox;