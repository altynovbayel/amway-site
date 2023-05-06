import React from 'react';
import c from './Main.module.scss'
import Catalog from "../../components/Catalog";
import Contacts from "../Contacts";
import Footer from "../../components/Footer";
import Form from '../../components/Form';


function Main() {
  return (
    <div className={c.main}>
      <Catalog/>
      <Form />
      <span></span>
      <Contacts/>
      <span></span>
    </div>
  );
}

export default Main;