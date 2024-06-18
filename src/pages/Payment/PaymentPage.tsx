import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../../components/HeaderFooter/Navbar';
import Footer from '../../components/HeaderFooter/Footer';
import OrderBox from '../../components/ItemBox/Food/OrderBox';
import Notes from '../../assets/edit.png';
import addOrder from '../../assets/add.png';
import priceLine from '../../assets/longLine.png';
import './Payment.css';
import { Cart } from '../../interfaces/Cart';
import { getCartById, updateQuantityInCart } from '../../services/cart/CartService';
import { Food } from '../../interfaces/Food';

const PaymentPage: React.FC = () => {
    const { cartID } = useParams<{ cartID: string }>();
    const [cart, setCart] = useState<Cart | null>(null);
    const [foods, setFoods] = useState<Food[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [subtotal, setSubtotal] = useState<number>(0);
 
    const calculation = () => { 
        if (cart && foods.length > 0) {
            const newSubtotal = foods.reduce((total, food) => {
                const quantity = cart.Foods[food.foodID!!] || 0;
                return total + (food.price * quantity);
            }, 0);
            setSubtotal(newSubtotal);
        }
    }

    useEffect(() => {
        calculation();
    }, [cart, foods]);

    useEffect(() => {
        const fetchCart = async () => {
            setLoading(true);
            const result = await getCartById(cartID!!);
            if (result) {
                setCart(result.cart);
                setFoods(result.foods);
            }
            setLoading(false);
        };
 
        fetchCart();
    }, [cartID]);
 
    if (loading) {
        return <div>Loading...</div>;
    }
 
    if (!cart) {
        return <div>No cart found</div>;
    }

    const onUpdateQuantity = async (foodID: string, newQuantity: number) => {
        try {
            await updateQuantityInCart(cartID!!, foodID, newQuantity);
            const result = await getCartById(cartID!!);
            if (result) {
                setCart(result.cart);
                setFoods(result.foods);
            }
        } catch (error) {
            // Handle error
        }
    };

    return (
        <div>
            <Header />
            <main>
                <div className='container'>

                    <div className='content-mobile' id='content-payment'>

                        <div className='order-summary'>
                            <h2>Order Summary</h2>
                            <div className='orderList'>
                            {foods.map(food => (
                                <OrderBox key={food.foodID} food={food} quantity={cart.Foods[food.foodID!!]} onUpdateQuantity={onUpdateQuantity} />
                            ))}
                            </div>

                            <Link to={`/tenant/${cart.tenantID}`}>
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
                                    <label>{subtotal}</label>
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
                                    <label>{subtotal + 1000}</label>
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