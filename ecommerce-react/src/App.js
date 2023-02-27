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


class App extends React.Component {

  constructor()
  {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) //ako je sign in
      {
        const userRef = await createUserProfileDocument(userAuth);

        onSnapshot(userRef,(snapShot) => {
          this.setState( {
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }//, () => console.log(this.state))
    )});
      }
      this.setState({currentUser: userAuth});

    });
  };

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render()
  {
    return (
      <div >
        <Header currentUser={this.state.currentUser} /> 
        <Routes>
          <Route exact path="/" element={ <HomePage />} />
          <Route exact path="/shop" element={ <ShopPage />} />
          <Route exact path="/signin" element={ <SingInAndSignUp />} />
        </Routes>
      </div>
    );
  }
  
}

export default App;
