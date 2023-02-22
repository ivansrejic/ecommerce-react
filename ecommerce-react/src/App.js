import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Routes,Route } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>Hats page</h1>
  </div>
)

function App() {
  return (
    <div >
      <Routes>
        <Route exact path="/" element={ <HomePage />} />
        <Route exact path="/hats" element={ <HatsPage />} />
      </Routes>
        
    </div>
  );
}

export default App;
