import React from 'react';
import { Link } from 'react-router-dom';
import Edit from '../../../assets/edit.png';
import Remove from '../../../assets/remove.png';
import { Food } from '../../../interfaces/Food';
import { DeleteFood } from '../../../services/food/FoodService';

interface DataProps{
    food : Food
}

const MenuBox: React.FC<DataProps> = ({food}) => {

    return (
        <div className="MenuBox">

            <div id="menu-image">
                <img src={food.foodImage} alt="" />
            </div>

            <div id="menu-info">
                <div id='food-info'>
                    <label id='food-name'>{food.foodName}</label>
                    <label id='food-desc'>{food.description}</label>
                </div>
                <div>
                    <label id='food-price'>Rp. {food.price}</label>
                </div>
            </div>
            
            <div id="manageFood">
                <Link to={`/menuDetail/${food.foodID}`}>
                    <div id='edit'>
                        <img src={Edit} alt="" />
                    </div>
                </Link>
                <div id='remove'>
                    <img onClick={()=>{DeleteFood(food.foodID!!)}} src={Remove} alt="" />
                </div>
            </div>

        </div>
    );
};

export default MenuBox;