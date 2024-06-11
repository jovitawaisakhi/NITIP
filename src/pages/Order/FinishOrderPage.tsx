import React from 'react';
import Header from '../../components/HeaderFooter/Navbar';
import Footer from '../../components/HeaderFooter/Footer';
import './FinishOrder.css';
import FinishOrderBox from '../../components/ItemBox/Order/FinishOrderBox';

const FinishOrderPage: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <div className='container'>

                    <div className='content-mobile' id='content-fo'>

                        <div id='orderList'>
                            <FinishOrderBox />
                            <FinishOrderBox />
                        </div>
                        
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
};

export default FinishOrderPage;