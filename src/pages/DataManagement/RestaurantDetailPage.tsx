import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/HeaderFooter/Navbar';
import Footer from '../../components/HeaderFooter/Footer';
import RestoPic from '../../assets/resto-pic.jpeg';
import RestoData from '../../components/ItemBox/Data/DataBox';
import DescBox from '../../components/ItemBox/Data/DescBox';
import MenuBox from '../../components/ItemBox/Food/MenuBox';
import addMenu from '../../assets/add.png';
import './RestaurantDetail.css';

const RestaurantDetailPage: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <div className='container'>

                    <div className='content-mobile' id='content-restoDetail'>

                        <h2>Restaurant Details</h2>
                        <div id='resto-picture'>
                            <div id='picture'>
                                <img src={RestoPic} alt="" />
                            </div>
                        </div>

                        <div id='resto-info'>
                            <div>
                                <RestoData label={"Nama Restoran"} data={"Xiao Kee, Binus Anggrek"} />
                            </div>
                            <div id='description'>
                                <DescBox />
                            </div>
                            <div id='menu-list'>
                                <div id='title'>
                                    <label>Menu</label>
                                </div>

                                <MenuBox />

                                <Link to="/menuDetail">
                                    <div id='addMenu'>
                                        <img src={addMenu} alt="" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
};

export default RestaurantDetailPage;