import React from "react";
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/crown.svg"
import './header.styles.scss'
import {auth} from "../../firebase/firebase.util"
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/user/user.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";

const Header = ({currentUser, hidden}) => (
    <div className = 'header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className="options">
            <Link className='option' to="/shop"> SHOP </Link>
            <Link className='option' to="/contact"> CONTACT </Link>
            {
                currentUser ? 
                <div className='option' onClick={() => auth.signOut() }>SIGN OUT</div>
                :
                <Link className='option' to='signIn'>SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropdown />
        }
        
    </div>
)

// const mapStateToProp = (state) => ({ //state je rootReducer
//     currentUser: selectCurrentUser(state),
//     hidden : selectCartHidden(state)
// }) Moze i ovako a moze i sa createStructuredSelector

const mapStateToProp = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
export default connect(mapStateToProp)(Header);