import React from 'react';
import Header from '../../components/HeaderFooter/Navbar';
import Footer from '../../components/HeaderFooter/Footer';
import RestoRecomenBox from '../../components/ItemBox/Resto/RestoRecomenBox';
import RestoPromoBox from '../../components/ItemBox/Resto/RestoPromoBox';
import Search from '../../assets/search.png';
import './Home.css';

const HomePage: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <div className='container' id='container-home'>

                    <div className='content-web'>

                        <div className='welcome'>
                            <h2>Welcome back, User!</h2>
                            <h3>Mau makan apa hari ini?</h3>
                            <div id='search-box'>
                                <input type="text" placeholder="Search here..." />
                                <img src={Search} alt="" />
                            </div>
                        </div>

                        <div className='top-recomen'>
                            <h2>Everyone's Favorite</h2>
                            <div className="slider-container">
                                <div id='resto-recomen-list' className="slider">
                                    <RestoRecomenBox />
                                    <RestoRecomenBox />
                                    <RestoRecomenBox />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='promo'>

                    <div className='content-web'>
                        <h2>Cek promonya sekarang!</h2>
                        <p>Up to 50% off 🔥</p>
                        <div className='slider-container'>
                            <div id='resto-promo-list' className="slider">
                                <RestoPromoBox />
                                <RestoPromoBox />
                                <RestoPromoBox />
                            </div>
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;