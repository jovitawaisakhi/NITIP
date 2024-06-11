import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/HeaderFooter/Navbar';
import Footer from '../../components/HeaderFooter/Footer';
import QR from '../../assets/QR.png';
import './QR.css';

const QRPage: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <div className='container'>

                    <div className='content-mobile' id='content-QR'>

                        <div id='title'>
                            <h2>Payment Process</h2>
                        </div>
                        <div id='price'>
                            <label>Total:</label>
                            <label>IDR 24.000</label>
                        </div>
                        <div id='qr'>
                            <label>Please scan the QR below to confirm your order</label>
                            <img src={QR} alt="" />
                        </div>
                        <div id='done'>
                            <Link to="/statusOrder">
                                <button type='submit'>Done</button>
                            </Link>
                        </div>
                        
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
};

export default QRPage;