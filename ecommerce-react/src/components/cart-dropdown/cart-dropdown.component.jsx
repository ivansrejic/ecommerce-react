import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import {connect} from 'react-redux';
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { useNavigate } from 'react-router-dom';




import './cart-dropdown.styles.scss';



const CartDropdown = ({cartItems}) => {

    const navigate = useNavigate();
    return (
        <div className='cart-dropdown'>
        <div className='cart-items'> 
           {
            cartItems.length ? 
            cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
            :
            <span className='empty-message'>Cart is empty</span>
           } 
        </div>
        <CustomButton onClick={() => navigate('/checkout')}>Go to checkout</CustomButton>
    </div>
    )
}

const mapStateToProps = createStructuredSelector({ 
    cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);



