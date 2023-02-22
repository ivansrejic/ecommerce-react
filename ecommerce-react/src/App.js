import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

import { Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route exact path="/" element={ <HomePage />} />
        <Route exact path="/shop" element={ <ShopPage />} />
      </Routes>
        
    </div>
  );
}

export default App;
