import React from 'react';
import Title from "../Title";
import c from './Catalog.module.scss'
import {catalogList} from "../../utils/list";
import CatalogCard from "./CatalogCard";

function Catalog() {
  
  return (
    <div className={c.catalog}>
      <Title title={'категории товаров'}/>
      <div className={c.container}>
        <div className={c.row_cards}>
          {
            catalogList.map(item => (
              <CatalogCard key={item.id} title={item.title} img={item.img}/>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Catalog;