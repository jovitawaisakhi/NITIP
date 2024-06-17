import React, { useEffect, useState } from 'react';
import Header from '../../components/HeaderFooter/Navbar';
import Footer from '../../components/HeaderFooter/Footer';
import CartBox from '../../components/ItemBox/Resto/CartBox';
import './Cart.css';
import { fetchUserCartItems } from '../../services/cart/CartService';
import { useNavigate } from 'react-router-dom';

const CartPage: React.FC = () => {
    const [cartItems, setCartItems] = useState<any[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCartData = async () => {
            try {
                const userId = localStorage.getItem("user")
                if(userId === null){
                    navigate('/login')
                }
                const items = await fetchUserCartItems(userId!!);
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