import React from 'react';
import c from './Main.module.scss'
import Catalog from "../../components/Catalog";
import Contacts from "../Contacts";
import Form from '../../components/Form';
import Brands from "../../components/Brands";
import Delivery from "../../components/Delivery";
import HeaderSlider from "../../components/HeaderSlider";
import {ScrollToTop} from "../../helpers";

function Main() {
  React.useEffect(() => {
    ScrollToTop()
  }, [])
  return (
    <div className={c.main}>
      <HeaderSlider/>
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