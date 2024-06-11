import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/HeaderFooter/Navbar';
import Footer from '../../components/HeaderFooter/Footer';
import MenuPic from '../../assets/menu-pic.jpeg';
import MenuData from '../../components/ItemBox/Data/DataBox';
import DescBox from '../../components/ItemBox/Data/DescBox';
import './MenuDetail.css';

const MenuDetailPage: React.FC = () => {
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
                            <div>
                                <MenuData label={"Nama Makanan"} data={"Chicken Teriyaki Rice Bowl"} />
                            </div>
                            <div id='description'>
                                <DescBox />
                            </div>
                            <div>
                                <MenuData label={"Harga"} data={"28.000"} />
                            </div>
                        </div>

                        <Link to="/restaurantDetail">
                            <div id='add'>
                                <button type='submit'>Tambah</button>
                            </div>
                        </Link>

                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
};

export default MenuDetailPage;