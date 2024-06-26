import React from 'react';
import { Link } from 'react-router-dom';
import remove from '../../../assets/remove.png';
import './Style.css';
import { Cart } from '../../../interfaces/Cart';

interface CartBoxProps {
    data: Cart;
}


const CartBox: React.FC<CartBoxProps> = ({data}) => {

    return (
        <Link to={`/payment/${data.cartID}`}>
            <div className="CartBox">
                <div id="cart-image">
                    <img src={data.tenant?.linkProfile} alt="" />
                </div>
                <div id="cart-info">
                    <p id='resto-name'>{data.tenant?.name}</p>
                    <p>{Object.keys(data.Foods).length} item(s)</p>
                </div>
                <div id="removeCart">
                    <div id='remove'>
                        <img src={remove} alt="" />
                    </div>
            </div>
            </div>
        </Link>
    );
};

export default CartBox;