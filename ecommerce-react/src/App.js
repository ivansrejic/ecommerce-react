import logo from './logo.svg';
import './App.css';
import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SingInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.util'
import {onSnapshot} from 'firebase/firestore'
import { Routes,Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user-actions'


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
          <Route exact path="/signin" element={ <SingInAndSignUp />} />
        </Routes>
      </div>
    );
  }
  
}


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});


export default connect(null, mapDispatchToProps)(App); 
