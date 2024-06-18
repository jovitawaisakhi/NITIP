import React, { useEffect } from 'react';
import Header from '../../components/HeaderFooter/Navbar';
import Footer from '../../components/HeaderFooter/Footer';
import './OrderHistory.css';
import OrderHistoryBox from '../../components/ItemBox/Order/OrderHistoryBox';
import { fetchTransactionsByUserID } from '../../services/transaction/TransactionService';
import { TransactionInterface } from '../../interfaces/Transaction';

const OrderHistoryPage: React.FC = () => {

    const [transactions, setTransactions] = React.useState<TransactionInterface[]>([]);

    const fetchTransactions = async () => {
        const userID = localStorage.getItem("user");
        if (userID) {
            const data = await fetchTransactionsByUserID(userID);
            const filteredTransactions = data.filter(transaction => transaction.status === 'finishing');
            setTransactions(filteredTransactions as any);
        }
        console.log(transactions)
    };

    useEffect(() => {
        fetchTransactions();
    }, []);

    return (
        <div>
            <Header />
            <main>
                <div className='container'>
                    <div className='content-mobile' id='content-oh'>
                        <h2>Order History</h2>
                        <div id='ohList'>
                            {transactions.map((item, index) => (
                                <OrderHistoryBox key={index} data={item} />
                            ))}
                        </div>
                        
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
};

export default OrderHistoryPage;