import React from 'react'
import Title from '../Title'
import c from './Goods.module.scss'
import { AiOutlineSearch } from 'react-icons/ai'
import { catalogList } from '../../utils/list'
import CatalogCard from '../Catalog/CatalogCard'
import { GetProducts } from '../../helpers'
import { useForm } from 'react-hook-form'
import GoodsCard from './GoodsCard'
import DoubleSlider from "../DoubleSlider";

const Goods = () => {
  const { products } = GetProducts()
  const [ result, setResult ] = React.useState([])
  const [values, setValues] = React.useState([0, 9500]);
  
  
  const priceFilter = () => {
    const res = products?.filter(el => el.price >= values[0] && el.price <= values[1])
    res && setResult(res)
  }
  
  const {
    register ,
    handleSubmit
  } = useForm()

  const searching = (search) => {
    const res = products?.filter(item => item.title.toLowerCase().includes(search.search.toLowerCase())) 
    setResult(res);
  }
  
  React.useEffect(() => {
    const cart = localStorage.getItem('cart')
    !cart && localStorage.setItem('cart', JSON.stringify([]))
  }, [])

  return (
    <div className={c.catalog}>
      <Title title={'каталог товаров'}/>
      <div className={c.row_filter}>
        <div className={c.search_filter}>
          <form
            className={c.search}
            onSubmit={handleSubmit(data => searching(data))}
          >
            <input
              type="text"
              placeholder='Поиск по каталогу'
              {...register('search', {minLength: 1 })}
            />
            <button type='submit'>
              <AiOutlineSearch />
              <span>Найти</span>
            </button>
          </form>
         <span className={c.price_layout}>
           <DoubleSlider setValues={setValues} values={values} show={priceFilter}/>
         </span>
          <div className={c.container}>
            <div className={c.row_cards}>
              {
                result?.length === 0  ?
                products?.map(item => (
                  <GoodsCard
                    obj={item}
                    key={item.id}
                    title={item.title}
                    img={item.img}
                    price={item.price}
                    id={item.id}
                  />
                )) :
                result?.length === 0  ?
                  <div className={c.nothing}>
                    <h2>Ничего нет</h2>
                  </div> 
                :
                result?.map(item => (
                  <GoodsCard
                    obj={item}
                    key={item.id}
                    title={item.title}
                    img={item.img}
                    price={item.price}
                    id={item.id}
                  />
                ))
              }
            </div>
          </div>
        </div>
        <span className={c.price_layout_2}>
          <DoubleSlider setValues={setValues} values={values} show={priceFilter}/>
        </span>
      </div>
    </div>
  )
}

export default Goods