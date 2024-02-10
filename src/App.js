import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Restview from './pages/Restview';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Header/>
  
    <Routes>
      <Route path='/'element={<Home/>}/>

      <Route path='/Restview/:id'element={<Restview/>}/>
      </Routes>
    <Footer/>
    </>
  
  );
}

export default App;
