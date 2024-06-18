import React from 'react';
import Header from '../../components/HeaderFooter/Navbar';
import Footer from '../../components/HeaderFooter/Footer';
import status from '../../assets/status.png';
import elipse from '../../assets/elipse.png';
import './OrderStatus.css';

const OrderStatusPage: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <div className='container'>
                    <div className='content-mobile' id='content-OS'>
                        <div id='title'>
                            <h2>Order Status</h2>
                        </div>

                        <div id='status'>
                            <div id='confirmed'>
                                <label className='left-label'>Confirmed</label>
                                <img src={status} alt="" />
                            </div>
                            <div id='processing'>
                                <label className='right-label'>Processing</label>
                                <img src={status} alt="" />
                            </div>
                            <div id='finished'>
                                <label className='left-label'>Finished</label>
                                <img src={status} alt="" />
                            </div>
                            <div id='ready'>
                                <label className='right-label'>Ready for pickup</label>
                                <img src={elipse} alt="" />
                            </div>
                        </div>

                        <div id='pickup'>
                            <button type='submit'>Pick Up!</button>
                        </div>

                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
};

export default OrderStatusPage;