import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/HeaderFooter/Navbar';
import Footer from '../../components/HeaderFooter/Footer';
import QR from '../../assets/QR.png';
import './QR.css';
import { fetchTransactionByCartID } from '../../services/transaction/TransactionService';
import { TransactionInterface } from '../../interfaces/Transaction';

const QRPage: React.FC = () => {

    const { cartID } = useParams<{ cartID: string }>();
    const [transaction, setTransaction] = useState<TransactionInterface | null>(null);
    const navigate = useNavigate()

    const fetchCart = async () => {
        const result = await fetchTransactionByCartID(cartID!!);
        if (result) {
            setTransaction(result)
        }
    };

    useEffect(() => {
        fetchCart();
    });

    const handleSubmit = () =>{
        navigate("/statusOrder/" + transaction?.id)
    }

    return (
        <div>
            <Header />
            <main>
                <div className='container'>

                    <div className='content-mobile' id='content-QR'>
                         <form onSubmit={handleSubmit}>
                            <div id='title'>
                                <h2>Payment Process</h2>
                            </div>
                            <div id='price'>
                                <label>Total:</label>
                                <label>IDR {Number(transaction?.subtotal) + 1000}</label>
                            </div>
                            <div id='qr'>
                                <label>Please scan the QR below to confirm your order</label>
                                <img src={QR} alt="" />
                            </div>
                            <div id='done'>
                                <button type='submit'>Done</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default QRPage;