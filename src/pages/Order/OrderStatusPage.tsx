import React, { useEffect } from 'react';
import Header from '../../components/HeaderFooter/Navbar';
import Footer from '../../components/HeaderFooter/Footer';
import status from '../../assets/status.png';
import elipse from '../../assets/elipse.png';
import './OrderStatus.css';
import { useParams } from 'react-router-dom';
import { fetchTransactionByTransactionID } from '../../services/transaction/TransactionService';
import { TransactionInterface } from '../../interfaces/Transaction';
// import { set } from 'firebase/database';

const OrderStatusPage: React.FC = () => {

    const { transactionID } = useParams<{ transactionID: string }>();
    const [transaction, setTransaction] = React.useState<TransactionInterface | null>();

    const fetchTransactionData = async () =>{
        if(transactionID){
            const tran = await fetchTransactionByTransactionID(transactionID);
            setTransaction(tran)
        }
    }

    useEffect(() => {
        fetchTransactionData();
    }, []);

    const getConfirmedClassName = (status: string) => {
        return status === 'confirmation' || status === 'processing' || status == 'finishing' ? 'confirmed' : '';
    };

    const getProcessingClassName = (status: string) => {
        return status === 'processing' || status == 'finishing' ? 'confirmed' : '';
    };

    const getFinishingClassName = (status: string) => {
        return status === 'finishing' ? 'done' : 'not-done';
    };

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
                            <div id={getConfirmedClassName(transaction?.status!!)}>
                                <img src={status} alt="" />
                                <label className='left-label'>Confirmed</label>
                            </div>
                            <div id={getProcessingClassName(transaction?.status!!)}>
                                <label className='right-label'>Processing</label>
                                <img src={status} alt="" />
                            </div>
                            <div id={getFinishingClassName(transaction?.status!!)}>
                                <label className='left-label'>Finished</label>
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