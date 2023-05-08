import React from 'react';
import Title from "../Title";
import c from './Catalog.module.scss'
import {catalogList} from "../../utils/list";
import CatalogCard from "./CatalogCard";
import {api} from "../../config/api";

function Catalog() {
  const [categories, setCategories] = React.useState(null)
  React.useEffect(() => {
    api.getCategories()
      .then(r => setCategories(r.data))
  }, [])
  return (
    <div className={c.catalog}>
      <Title title={'категории товаров'}/>
      <div className={c.container}>
        <div className={c.row_cards}>
          {
            categories?.map(item => (
              <CatalogCard key={item.id} title={item.title} img={item.image}/>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Catalog;