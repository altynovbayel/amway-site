import React from 'react';
import Title from "../Title";
import c from './Catalog.module.scss'
import {catalogList} from "../../utils/list";
import CatalogCard from "./CatalogCard";
import {api} from "../../config/api";
import Loader from "../Loader";

function Catalog() {
  const [categories, setCategories] = React.useState(null)
  React.useEffect(() => {
    api.getCategories()
      .then(r => setCategories(r.data))
  }, [])
  
  console.log(categories)
  if (!categories) return <div className={c.loader}> <Loader/></div>
  return (
    <div className={c.catalog}>
      <Title title={'категории товаров'}/>
      <div className={c.container}>
        <div className={c.row_cards}>
          {
            categories?.map(item => (
              <CatalogCard key={item.id} title={item.title} img={item.image} id={item.id}/>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Catalog;