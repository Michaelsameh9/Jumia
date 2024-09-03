import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Banner from './components/banner';
import Header from './components/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/home";
import Supermarket from "./components/Supermarket";
import Fashion from "./components/Fashion";
import Health from "./components/Health";
import Baby from "./components/Baby";
import Phones from "./components/Phones";
import Furniture from "./components/Furniture";
import Appliances from "./components/Appliances";
import Audio from "./components/Audio";
import Computing from "./components/Computing";
import Sporting from "./components/Sporting";
import Gaming from "./components/Gaming";
import Other from "./components/Other";
import Cart from './components/cart';
import Footer from './components/footer';
import ProductList from './components/test2';
import Details from './components/details';
import SignIn from './components/SignIn';

function App() {

  return (
    <>
      <Banner />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Supermarket' element={<Supermarket />} />
          <Route path='/Fashion' element={<Fashion />} />
          <Route path='/Health_Beauty' element={<Health />} />
          <Route path='/Baby_Products' element={<Baby />} />
          <Route path='/Phones_Tablets' element={<Phones />} />
          <Route path='/Home_Furniture' element={<Furniture />} />
          <Route path='/Appliances' element={<Appliances />} />
          <Route path='/Televisions_Audio' element={<Audio />} />
          <Route path='/Computing' element={<Computing />} />
          <Route path='/Sporting-Goods' element={<Sporting />} />
          <Route path='/Gaming' element={<Gaming />} />
          <Route path='/Other-categories' element={<Other />} />
          <Route path='/productlist' element={<ProductList />} />
          <Route path='/cart' element={<Cart />} />
          <Route path="/detail/:id" element={<Details />} />
          <Route path='/sing-in' element={<SignIn />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
