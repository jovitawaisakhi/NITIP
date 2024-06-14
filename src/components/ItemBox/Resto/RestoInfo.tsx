import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import addMenu from '../../../assets/add.png';
import MenuBox from "../Food/MenuBox";
import '../../../components/ItemBox/Data/Style.css';
import DataBox from "../Data/DataBox";
import DescBox from "../Data/DescBox";
import { getAllFood } from "../../../services/food/FoodService";
import { Food } from "../../../interfaces/Food";

export default function RestoInfo(){
    const [restaurantName, setRestaurantName] = useState<string|undefined>('');
    const [description, setDescription] = useState<string|undefined>('');
    const [foods, setFoods] = useState<Food[]>([]);

    useEffect(()=>{
        const fetchAllFood = getAllFood();

        fetchAllFood.then(foods =>{
            setFoods(foods)
        })
    }, [])

    return(
        <div id='resto-info'>
            <DataBox
                label="Restaurant Name"
                inputOnChange={(e)=>{setRestaurantName(e.target.value)}}/>
            <div id='description'>
                <DescBox
                    label="Description"
                    inputOnChange={(e)=>setDescription(e.target.value)}/>
            </div>

            {/* komponen*/}
            <div id='menu-list'>
                <div id='title'>
                    <label>Menu</label>
                </div>

                {foods.map((food, index)=>(
                    <MenuBox key={index} food={food}/>
                ))}

                <Link to="/menuDetail">
                    <div id='addMenu'>
                        <img src={addMenu} alt="" />
                    </div>
                </Link>
            </div>
        </div>
    )
}