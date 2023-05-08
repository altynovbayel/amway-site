import React from 'react'
import Title from '../Title'
import c from './Goods.module.scss'
import { AiOutlineSearch } from 'react-icons/ai'
import { GetProducts } from '../../helpers'
import GoodsCard from './GoodsCard'
import DoubleSlider from "../DoubleSlider";
import Loader from "../Loader";
import { Link } from 'react-router-dom'
import { api } from '../../config/api'

const Goods = () => {
  const { products } = GetProducts()
  const [ result, setResult ] = React.useState([])
  const [ searchResult, setSearchResult ] = React.useState(null)
  const [ search, setSearch ] = React.useState('')
  const [ categories, setCategories ] = React.useState(null)
  const [ values, setValues ] = React.useState([0, 50000]);
  
  const priceFilter = () => {
    const res = products?.filter(el => el.price >= values[0] && el.price <= values[1])
    res && setResult(res)
  }
  const searching = () => {
    const res = products?.filter(item => item.title.toLowerCase().includes(search.toLowerCase())) 
    setResult(res);
  }

  const searchingOnType = (e) => {
    const res = products?.filter(item => item.title.toLowerCase().includes(e.toLowerCase())) 
    setSearchResult(res);
  }
  
  React.useEffect(() => {
    const cart = localStorage.getItem('cart')
    !cart && localStorage.setItem('cart', JSON.stringify([]))

    api.getCategories()
      .then(res => setCategories(res.data))
  }, [])

  return (
    <div className={c.catalog}>
      <Title title={'каталог товаров'}/>
      <div className={c.row_filter}>
        <div className={c.search_filter}>
          <form
            className={c.search}
          >
            <div className={c.search_form}>
              <input
                type="text"
                placeholder='Поиск по каталогу'
                onChange={e => {
                  searchingOnType(e.target.value)
                  setSearch(e.target.value)
                }}
              />
              {
                search.length > 0?
                <ul className={c.hints}>
                  {
                    searchResult?.length !== 0 ?
                    searchResult?.map(item => (
                      <li key={item.id}>
                        <Link to={`/products/${item.id}/`}>
                          {item.title}
                        </Link>
                      </li>
                    )) :
                    <h3>Ничего не найдено</h3>
                  }
                </ul> :
                null
              }
            </div>
            <button 
              onClick={e => {
                e.preventDefault()
                searching()
              }}  
            >
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
                !products && <div className={c.loader}><Loader/></div>
              }
              {
                result?.length === 0  ?
                products?.map(item => (
                  <GoodsCard
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    id={item.id}
                    obj={item}
                  />
                )) :
                result?.length === 0  ?
                  <div className={c.nothing}>
                    <h2>Ничего нет</h2>
                  </div> 
                :
                result?.map(item => (
                  <GoodsCard
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    id={item.id}
                    obj={item}
                  />
                ))
              }
            </div>
          </div>
        </div>
        <span className={c.price_layout_2}>
          <DoubleSlider setValues={setValues} values={values} show={priceFilter} products={products && products} />
          <ul className={c.categories_layout}>
            <h4>Категории:</h4>
            {
              categories?.map(item => (
                <li key={item.id}>
                  <Link to={`/products/category/${item.id}`}>
                    {item.title}
                  </Link>
                </li>
              ))
            }
          </ul>
        </span>
      </div>
    </div>
  )
}

export default Goods