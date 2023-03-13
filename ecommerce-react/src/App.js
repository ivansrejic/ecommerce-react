import logo from './logo.svg';
import './App.css';
import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import {auth, createUserProfileDocument} from './firebase/firebase.util'
import {onSnapshot} from 'firebase/firestore'
import { Routes,Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions'
import SignIn from './components/sign-in/sign-in.component';
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
import HatsPage from './pages/hats/hats-page.component';
import JacketsPage from './pages/jackets/jackets-page.component';

class App extends React.Component {

 
  unsubscribeFromAuth = null;

  componentDidMount() {

    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) //ako je signed in
      {
        const userRef = await createUserProfileDocument(userAuth);

        onSnapshot(userRef,(snapShot) => {
          setCurrentUser( {
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }//, () => console.log(this.state))
    )
  });
      }

      setCurrentUser(userAuth);

    });
  };

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render()
  {
    return (
      <div >
        <Header/> 
        <Routes>
          <Route exact path="/" element={ <HomePage />} />
          <Route exact path="/shop" element={ <ShopPage />} />
          <Route exact path="/signin" element= { this.props.currentUser ? <Navigate to='/' /> : <SignInAndSignUp /> } />
          <Route exact path="/checkout" element={ <CheckoutPage /> } />
          <Route exact path="/hats" element={ <HatsPage /> } />
          <Route exact path="/jackets" element={ <JacketsPage /> } />
        </Routes>
      </div>
    );
  }
  
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(App); 
