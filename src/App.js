import Navbar from "./components/Navbar";
import { Route, Routes as Switch } from 'react-router-dom';
import * as Layout from './page'
import axios from "axios";
import React from "react";
import Footer from "./components/Footer";
axios.defaults.baseURL = 'https://amway.pythonanywhere.com'

function App() {
  return (
    <div className="App">
      <h1>
        Сайт не работает!
      </h1>
    </div>
  );
}

export default App;

{/* <Navbar/>
      <Switch>
        <Route path='/' element={<Layout.Main/>}/>
        <Route path='*' element={<Layout.Main/>}/>
        <Route path='/catalog/' element={<Layout.Goods/>}/>
        <Route path='/contacts/' element={<Layout.Contacts/>}/>
        <Route path='/comments/' element={<Layout.Comments/>}/>
        <Route path='/products/:id' element={<Layout.More/>}/>
        <Route path='/products/category/:id' element={<Layout.Category/>}/>
        <Route path='/cart/' element={<Layout.Order/>}/>
      </Switch>
      <Footer /> */}