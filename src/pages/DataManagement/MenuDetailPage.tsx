import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/HeaderFooter/Navbar';
import Footer from '../../components/HeaderFooter/Footer';
import MenuPic from '../../assets/menu-pic.jpeg';
import './MenuDetail.css';
import '../../components/ItemBox/Data/Style.css';
import { AddFood } from '../../services/food/FoodService';
import DataBox from '../../components/ItemBox/Data/DataBox';
import DescBox from '../../components/ItemBox/Data/DescBox';

const MenuDetailPage: React.FC = () => {    
    const [foodName, setFoodName] = useState<string|undefined>('');
    const [description, setDescription] = useState<string|undefined>('');
    const [price, setPrice] = useState<string|undefined>('');

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