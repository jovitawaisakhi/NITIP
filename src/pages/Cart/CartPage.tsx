import React from 'react';
import Header from '../../components/HeaderFooter/Navbar';
import Footer from '../../components/HeaderFooter/Footer';
import CartBox from '../../components/ItemBox/Resto/CartBox';
import './Cart.css';

const CartPage: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <div className='container'>

                    <div className='content-web' id='content-cart'>
                        <div className='cartList'>
                            <h2>Your Cart</h2>
                            <CartBox />
                            <CartBox />
                            <CartBox />
                            <CartBox />
                            <CartBox />
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CartPage;