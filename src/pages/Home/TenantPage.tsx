import React from 'react';
import Header from '../../components/HeaderFooter/Navbar';
import Footer from '../../components/HeaderFooter/Footer';
import foodImg from '../../assets/hainan-rice.jpeg';
import FoodBox from '../../components/ItemBox/Food/FoodBox';
import './Tenant.css';

const TenantPage: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <div id='foodImg'>
                    <img src={foodImg} alt="" />
                </div>
                <div className='container'>

                    <div className='content-web' id='content-tenant'>
                        <div className='foodList'>
                            <h2>Xiao Kee, Binus Anggrek</h2>
                            <FoodBox />
                            <FoodBox />
                            <FoodBox />
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TenantPage;