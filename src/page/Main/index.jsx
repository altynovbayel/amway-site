import React from 'react';
import c from './Main.module.scss'
import Catalog from "../../components/Catalog";
import Contacts from "../Contacts";
import Footer from "../../components/Footer";


function Main() {
  return (
    <div className={c.main}>
      <Catalog/>
      <span></span>
      <Contacts/>
      <span></span>
      <Footer/>
    </div>
  );
}

export default Main;