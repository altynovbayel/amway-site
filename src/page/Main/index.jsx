import React from 'react';
import c from './Main.module.scss'
import Catalog from "../../components/Catalog";
import Contacts from "../Contacts";
import Form from '../../components/Form';
import Brands from "../../components/Brands";
import Delivery from "../../components/Delivery";

function Main() {
  return (
    <div className={c.main}>
      <Catalog/>
      <Brands/>
      <Delivery/>
      <Form />
      <Contacts/>
      <span></span>
    </div>
  );
}

export default Main;