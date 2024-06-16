import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/HeaderFooter/Navbar';
import Footer from '../../components/HeaderFooter/Footer';
import './MenuDetail.css';
import '../../components/ItemBox/Data/Style.css';
import { AddFood, UpdateFood, getFood } from '../../services/food/FoodService';
import DataBox from '../../components/ItemBox/Data/DataBox';
import DescBox from '../../components/ItemBox/Data/DescBox';
import { Food } from '../../interfaces/Food';
import DataValueBox from '../../components/ItemBox/Data/DataValueBox';

const MenuDetailPage: React.FC = () => {
    const { foodID } = useParams<{ foodID: string }>();
    const [food, setFood] = useState<Food | undefined>();
    const [foodName, setFoodName] = useState<string | undefined>('');
    const [description, setDescription] = useState<string | undefined>('');
    const [price, setPrice] = useState<string | undefined>('');

    const fetchFood = async () => {
        const f = await getFood(foodID);
        setFood(f);
        if (f) {
            setFoodName(f.foodName);
            setDescription(f.description);
            setPrice(f.price.toString());
            console.log(f)
        }
    };

    useEffect(() => {
        fetchFood();
    }, []);

    const navigate = useNavigate();

    const handleAddMenu = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!foodName || !description || !price) {
            alert('Please fill all the fields')
            return;
        }

        const tenantID = localStorage.getItem('user');

        if(tenantID){
            AddFood(navigate, foodName, description, price, tenantID);
        }
        navigate('/restaurantDetail');
    };

    const handleUpdateMenu = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!foodName || !description || !price) {
            alert('Please fill all the fields')
            return;
        }

        const tenantID = localStorage.getItem('user');

        if(tenantID){
            console.log(
                "update food"
            )
            UpdateFood(navigate, foodID!!,  foodName, description, price, tenantID);
        }
        navigate('/restaurantDetail');
    };

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    };

    return (
        <div>
            <Header />
            <main>
                <div className='container'>
                    <div className='content-mobile' id='content-menuDetail'>
                        <h2>Menu Details</h2>
                        <div id='menu-picture'>
                            <div id='picture'>
                                <img src={food?.foodImage} alt="" />
                            </div>
                        </div>

                        {food ? (
                            <>
                                <div id='menu-infos'>
                                    <DataValueBox
                                        inputOnChange={(e) => { setFoodName(e.target.value) }}
                                        data={foodName!!}
                                        label='Food Name'
                                    />
                                    <div id='description'>
                                        <DescBox
                                            label='Description'
                                            value={description!!}
                                            inputOnChange={handleDescriptionChange}
                                        />
                                    </div>
                                    <DataValueBox
                                        inputOnChange={(e) => { setPrice(e.target.value) }}
                                        data={price!!}
                                        label='Price'
                                    />
                                </div>
                                <div id='add'>
                                    <button type='submit' onClick={handleUpdateMenu}>Update</button>
                                </div>
                            </>
                        ) : (
                            <>
                                <div id='menu-infos'>
                                    <DataBox
                                        label='Food Name'
                                        inputOnChange={(e) => { setFoodName(e.target.value) }}
                                    />
                                    <div id='description'>
                                        <DescBox
                                            label='Description'
                                            inputOnChange={(e) => { setDescription(e.target.value) }}
                                        />
                                    </div>
                                    <DataBox
                                        label='Price'
                                        inputOnChange={(e) => { setPrice(e.target.value) }}
                                    />
                                </div>
                                <div id='add'>
                                    <button type='submit' onClick={handleAddMenu}>Tambah</button>
                                </div>
                            </>
                        )}

                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default MenuDetailPage;