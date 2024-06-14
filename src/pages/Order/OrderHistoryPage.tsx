import React from 'react';
import Header from '../../components/HeaderFooter/Navbar';
import Footer from '../../components/HeaderFooter/Footer';
import './OrderHistory.css';
import OrderHistoryBox from '../../components/ItemBox/Order/OrderHistoryBox';

const OrderHistoryPage: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <div className='container'>

                    <div className='content-mobile' id='content-oh'>

                        <h2>Order History</h2>

                        <div id='ohList'>
                            <OrderHistoryBox />
                            <OrderHistoryBox />
                        </div>
                        
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
};

export default OrderHistoryPage;