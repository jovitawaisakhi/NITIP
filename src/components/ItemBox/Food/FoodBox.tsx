import React from 'react';
import './Style.css';
import { Food } from '../../../interfaces/Food';
import { AddToCart } from '../../../services/cart/CartService';
import { useNavigate, useParams } from 'react-router-dom';

interface DataProps{
    food : Food;
}

const FoodBox: React.FC<DataProps> =({food}) => {
    const userID = localStorage.getItem("user");
    const { tenantID } = useParams<{ tenantID: string }>();
    const navigate = useNavigate();

    return (
        <div className="foodBox">
            <div id="food-image">
                <img src={food.foodImage} alt="" />
            </div>
            <div id="food-info">
                <p id='food-names'>{food.foodName}</p>
                <p id='food-price'>{food.price}</p>
            </div>
            <div id="addFood">
                <button onClick={()=>{AddToCart(navigate, food.foodID!, tenantID!, userID!)}}>Tambah</button>
            </div>
        </div>
    );
};

export default FoodBox;