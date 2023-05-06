import Navbar from "./components/Navbar";
import { Route, Routes as Switch } from 'react-router-dom';
import * as Layout from './page'
import axios from "axios";
import { api } from "./config/api";
import React from "react";
axios.defaults.baseURL = 'https://amway.pythonanywhere.com'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path='/' element={<Layout.Main/>}/>
        <Route path='*' element={<Layout.Main/>}/>
        <Route path='/catalog/' element={<Layout.Goods/>}/>
        <Route path='/contacts/' element={<Layout.Contacts/>}/>
        <Route path='/comments/' element={<Layout.Comments/>}/>
        <Route path='/products/:id' element={<Layout.More/>}/>
      </Switch>
    </div>
  );
}

export default App;
