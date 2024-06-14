import React from 'react';
import foodImg from '../../../assets/hainan-rice.jpeg';
import './Style.css';

const FoodBox: React.FC = () => {
    return (
        <div className="foodBox">
            <div id="food-image">
                <img src={foodImg} alt="" />
            </div>
            <div id="food-info">
                <p id='food-names'>Hainan Rice</p>
                <p id='food-price'>25.000</p>
            </div>
            <div id="addFood">
                <button>Tambah</button>
            </div>
        </div>
    );
};

export default FoodBox;