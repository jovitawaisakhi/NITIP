import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/HeaderFooter/Navbar';
import Footer from '../../components/HeaderFooter/Footer';
import OrderBox from '../../components/ItemBox/Food/OrderBox';
import Notes from '../../assets/edit.png';
import addOrder from '../../assets/add.png';
import priceLine from '../../assets/longLine.png';
import './Payment.css';

const PaymentPage: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <div className='container'>

                    <div className='content-mobile' id='content-payment'>

                        <div className='order-summary'>
                            <h2>Order Summary</h2>
                            <div className='orderList'>
                                <OrderBox />
                            </div>

                            <Link to="/tenant">
                                <div id='addOrder'>
                                    <img src={addOrder} alt="" />
                                </div>
                            </Link>

                            <div id='notes'>
                                <img src={Notes} alt="" />
                                <input type="text" placeholder="Tambahkan catatan..." />
                            </div>
                        </div>

                        <div className='payment-detail'>
                            <h2>Payment Detail</h2>
                            <div id='price-info'>
                                <div className='price'>
                                    <label>Sub Total</label>
                                    <label>23.000</label>
                                </div>
                                <div className='price'>
                                    <label>Biaya Layanan</label>
                                    <label>1.000</label>
                                </div>
                                <div id='line-price'>
                                    <img src={priceLine} alt="" />
                                </div>
                                <div id='total-price'>
                                    <label>Total</label>
                                    <label>24.000</label>
                                </div>
                            </div>
                            <div id='time-estimation'>
                                <p>*Perkiraan waktu: 12 menit</p>
                            </div>
                        </div>

                        <div id='pay'>
                            <Link to="/qr">
                                <button type='submit'>Bayar</button>
                            </Link>
                        </div>
                        
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PaymentPage;