import React from 'react';
import Header from '../../components/HeaderFooter/Navbar';
import Footer from '../../components/HeaderFooter/Footer';
import RestoPic from '../../assets/resto-pic.jpeg';
import './RestaurantDetail.css';
import '../../components/ItemBox/Data/Style.css'
import RestoInfo from '../../components/ItemBox/Resto/RestoInfo';

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
                        <RestoInfo/>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default RestaurantDetailPage;