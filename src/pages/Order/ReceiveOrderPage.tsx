import React from 'react';
import Header from '../../components/HeaderFooter/Navbar';
import Footer from '../../components/HeaderFooter/Footer';
import Alert from '../../assets/alert.png';
import './ReceiveOrder.css';

const ReceiveOrderPage: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <div className='container'>

                    <div className='content-mobile' id='content-OR'>

                        <div id='alert'>
                            <img src={Alert} alt="" />
                        </div>
                        <div id='status'>
                            <h2>New Order Received</h2>
                        </div>
                        <div id='from-name'>
                            <label id='from'>from:</label>
                            <label id='name'>Jonathan Maverick</label>
                        </div>
                        <div id='accept'>
                            <button>ACCEPT</button>
                        </div>
                        <div id='cancel'>
                            <button>CANCEL</button>
                        </div>

                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ReceiveOrderPage;