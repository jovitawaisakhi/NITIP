import React, { FormEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/HeaderFooter/Navbar';
import Footer from '../../components/HeaderFooter/Footer';
import MenuPic from '../../assets/menu-pic.jpeg';
import './MenuDetail.css';
import '../../components/ItemBox/Data/Style.css';
import { AddFood, getFood } from '../../services/food/FoodService';
import DataBox from '../../components/ItemBox/Data/DataBox';
import DescBox from '../../components/ItemBox/Data/DescBox';
import { Food } from '../../interfaces/Food';
import DataValueBox from '../../components/ItemBox/Data/DataValueBox';
import DescValueBox from '../../components/ItemBox/Data/DescValueBox';

const MenuDetailPage: React.FC = () => {    
    const {foodID} = useParams();
    const [food, setFood] = useState<Food>();
    const [foodName, setFoodName] = useState<string|undefined>('');
    const [description, setDescription] = useState<string|undefined>('');
    const [price, setPrice] = useState<string|undefined>('');

    const fetchFood = async ()=>{
        const f = await getFood(foodID);
        setFood(f);
    }

    useEffect(()=>{
        fetchFood();
    }, [])

    const navigate = useNavigate();

    const handleAddMenu = async (e : FormEvent) => {
        e.preventDefault()
        
        if(foodName == '' || foodName == undefined){

        } else if(description == '' || description == undefined){

        } else if(price == '' || price == undefined){

        } else {
            AddFood(navigate, foodName, description, price);
            navigate('/restaurantDetail')
        }
    }

    return (
        <div>
            <Header />
            <main>
                <div className='container'>
                    <div className='content-mobile' id='content-menuDetail'>
                        <h2>Menu Details</h2>
                        <div id='menu-picture'>
                            <div id='picture'>
                                <img src={MenuPic} alt="" />
                            </div>
                        </div>

                        {food ? (
                            <div id='menu-infos'>
                                <DataValueBox 
                                    data={food.foodName}
                                    label='Food Name'/>
                                <div id='description'>
                                    <DescValueBox
                                        label='Description'
                                        data={food.description}
                                        />
                                </div>
                                <DataValueBox
                                    data={food.price}
                                    label='Price'/>
                            </div>
                        ) : (
                            <div id='menu-infos'>
                                <DataBox 
                                    label='Food Name'
                                    inputOnChange={(e)=>{setFoodName(e.target.value)}}/>
                                <div id='description'>
                                    <DescBox 
                                        label='Description'
                                        inputOnChange={(e)=>{setDescription(e.target.value)}}/>
                                </div>
                                <DataBox
                                    label='Price'
                                    inputOnChange={(e)=>{setPrice(e.target.value)}}/>
                            </div>
                        )}


                        <div id='add'>
                            <button type='submit' onClick={handleAddMenu}>Tambah</button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default MenuDetailPage;