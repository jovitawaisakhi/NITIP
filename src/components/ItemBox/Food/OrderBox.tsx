import React, { useState } from 'react';
import addQty from '../../../assets/addQty.png';
import minusQty from '../../../assets/minusQty.png';
import line from '../../../assets/line.png';
import './Style.css';
import { Food } from '../../../interfaces/Food';

interface OrderBoxProps {
    food: Food;
        quantity: number;
        onUpdateQuantity: (foodID: string, newQuantity: number) => void; 
}

const OrderBox: React.FC<OrderBoxProps> = ({ food, quantity, onUpdateQuantity }) => {
    const [localQuantity, setLocalQuantity] = useState(quantity); 

    const decreaseQuantity = () => {
        const newQuantity = Math.max(0, localQuantity - 1); 
        setLocalQuantity(newQuantity);
        onUpdateQuantity(food.foodID!!, newQuantity); 
    };

    const increaseQuantity = () => {
        const newQuantity = localQuantity + 1;
        setLocalQuantity(newQuantity);
        onUpdateQuantity(food.foodID!!, newQuantity); 
    };

return (
    <div className="OrderBox">
        <div id="order-image">
            <img src={food.foodImage} />
        </div>
        <div id="order-info">
            <p id='food-name'>{food.foodName}</p>
            <p>{food.price}</p>
        </div>
        <div id="qty">
            <div className='manageQty' onClick={decreaseQuantity}>
                <img src={minusQty} alt="Decrease Quantity" />
            </div>
            <div id="numQty">
                <p>{localQuantity}</p>
                <img src={line} alt="Quantity Line" />
            </div>
            <div className='manageQty' onClick={increaseQuantity}>
                <img src={addQty} alt="Increase Quantity" />
            </div>
        </div>
    </div>
);
};

export default OrderBox;