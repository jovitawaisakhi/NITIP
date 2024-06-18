import React, { useEffect } from 'react';
import Header from '../../components/HeaderFooter/Navbar';
import Footer from '../../components/HeaderFooter/Footer';
import './FinishOrder.css';
import FinishOrderBox from '../../components/ItemBox/Order/FinishOrderBox';
import { fetchTransactionsByTenantID } from '../../services/transaction/TransactionService';
import { TransactionInterface } from '../../interfaces/Transaction';

const FinishOrderPage: React.FC = () => {

    const [transactions, setTransactions] = React.useState<TransactionInterface[]>([]);

    const fetchTransactions = async () => {
        const tenantID = localStorage.getItem("user");
        if (tenantID) {
            const data = await fetchTransactionsByTenantID(tenantID);
            const filteredTransactions = data.filter(transaction => transaction.status !== 'finishing');
            setTransactions(filteredTransactions as any);
        }
    };

    useEffect(() => {
        fetchTransactions();
    }, []);

    return (
        <div>
            <Header />
            <main>
                <div className='container'>
                    <div className='content-mobile' id='content-fo'>
                        <div id='orderList'>
                            {transactions.map((item, index) => (
                                <FinishOrderBox key={index} data={item} refreshTransactions={fetchTransactions} />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default FinishOrderPage;