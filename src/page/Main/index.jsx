import React from 'react';
import c from './Main.module.scss'
import Catalog from "../../components/Catalog";
import Contacts from "../../components/Contacts";


function Main() {
  return (
    <div className={c.main}>
      <Catalog/>
      <span></span>
      <Contacts/>
    </div>
  );
}

export default Main;