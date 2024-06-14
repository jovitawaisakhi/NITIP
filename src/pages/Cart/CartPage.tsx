import React, { useEffect, useState } from 'react';
import Header from '../../components/HeaderFooter/Navbar';
import Footer from '../../components/HeaderFooter/Footer';
import CartBox from '../../components/ItemBox/Resto/CartBox';
import './Cart.css';
import { fetchUserCartItems } from '../../services/cart/CartService';

const CartPage: React.FC = () => {

    const [cartItems, setCartItems] = useState<any[]>([]);

    useEffect(() => {
        const fetchCartData = async () => {
            try {
                // const userId = getCurrentUserId(); 
                // User ID masih nembak karena pas gw reload dia ngilang id nya
                const userId = "NwTn3Bkb18XHFrbTkybHKxZ6tQz2"
                const items = await fetchUserCartItems(userId);
                console.log(userId)
                console.log(items)
                setCartItems(items);
            } catch (error) {
                console.error('Error fetching user cart items:', error);
            }
        };

        fetchCartData();
    }, []);

    return (
        <div>
            <Header />
            <main>
                <div className='container'>
                    <div className='content-web' id='content-cart'>
                        <div className='cartList'>
                            <h2>Your Cart</h2>
                            {cartItems.map((item, index) => (
                                <CartBox key={index} data={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CartPage;