import React, { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/HeaderFooter/Navbar';
import Footer from '../../components/HeaderFooter/Footer';
import MenuPic from '../../assets/menu-pic.jpeg';
import Edit from '../../assets/edit.png';
import Line from '../../assets/longLine.png';
import './MenuDetail.css';
import '../../components/ItemBox/Data/Style.css';
import { AddFood } from '../../services/food/FoodService';

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
                            <div className='DataBox'>
                                <div id='Lbl_Data'>
                                    <label>Food Name</label>
                                </div>
                                <div id='data'>
                                    <input value={foodName} onChange={(e)=>setFoodName(e.target.value)}/>
                                    <img src={Edit} alt="Edit" />
                                </div>
                                <div id='line'>
                                    <img src={Line} alt="Line" />
                                </div>
                            </div>
                            <div id='description'>
                                <div className="DescBox">
                                    <label>Deskripsi</label>
                                    <div id='description'>
                                        <textarea value={description} onChange={(e)=>setDescription(e.target.value)}/>
                                        <img src={Edit} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='DataBox'>
                                <div id='Lbl_Data'>
                                    <label>Price</label>
                                </div>
                                <div id='data'>
                                    <input value={price} onChange={(e)=>setPrice(e.target.value)}/>
                                    <img src={Edit} alt="Edit" />
                                </div>
                                <div id='line'>
                                    <img src={Line} alt="Line" />
                                </div>
                            </div>
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