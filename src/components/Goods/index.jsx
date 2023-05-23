import React from 'react'
import Title from '../Title'
import c from './Goods.module.scss'
import { AiOutlineSearch } from 'react-icons/ai'
import {GetProducts, ScrollToTop} from '../../helpers'
import GoodsCard from './GoodsCard'
import DoubleSlider from "../DoubleSlider";
import Loader from "../Loader";
import { Link } from 'react-router-dom'
import { api } from '../../config/api'
import Pagination from "../Pagination";

const Goods = () => {
  const { products } = GetProducts()
  const [ result, setResult ] = React.useState([])
  const [ searchResult, setSearchResult ] = React.useState(null)
  const [ search, setSearch ] = React.useState('')
  const [ categories, setCategories ] = React.useState(null)
  const [ selected, setSelected ] = React.useState('Все')
  const [ values, setValues ] = React.useState([0, 50000]);
  const [ activeCategories, setActiveCategories ] = React.useState(false);
  // pagination
  const [productsCopy, setProductsCopy] = React.useState([])
  const [currentPage, setCurrentPage] = React.useState(1)
  const limit = 20
  const pageCount = Math.ceil(products?.length / limit)
  const lastContentIndex = currentPage * limit;
  const firstContentIndex = lastContentIndex - limit;
  
  
  const priceFilter = () => {
    const res = products?.filter(el => el.price >= values[0] && el.price <= values[1])
    res && setResult(res)
  }
  const searching = () => {
    const res = products?.filter(item => item.title.toLowerCase().includes(search.toLowerCase())) 
    res && setResult(res);
    setSearch('')
  }

  const searchingOnType = (e) => {
    const res = products?.filter(item => item.title.toLowerCase().includes(e.toLowerCase())) 
    res && setSearchResult(res);
  }
  
  React.useEffect(() => {
    ScrollToTop()
    const cart = localStorage.getItem('cart')
    !cart && localStorage.setItem('cart', JSON.stringify([]))

    api.getCategories()
      .then(res => {
        setCategories(res.data)
      })
  }, [])
  
  React.useEffect(() => {
    setProductsCopy(products?.slice(firstContentIndex, lastContentIndex))
  }, [currentPage, products])
  
  
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
                      <li 
                        key={item.id}
                      >
                        <Link 
                          to={`/products/${item.id}/`}
                        >
                          {item.title}
                        </Link>
                      </li>
                    )) :
                    <h4>Ничего не найдено</h4>
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
            <ul className={c.categories_phone}>
              <h4>Категории: <span onClick={() => setActiveCategories(!activeCategories)}>{selected?.length > 20 ? `${selected?.slice(0, 20)}...` : selected}</span></h4>
                {
                  activeCategories ?
                  <ul>
                    <li>
                      <Link to={`/catalog/`}>
                        Все
                      </Link>
                    </li>
                    {
                      categories?.map(item => (
                        <li key={item.id}>
                          <Link to={`/products/category/${item.id}/`}>
                            {item.title}
                          </Link>
                        </li>
                      ))
                    }
                  </ul>
                  :
                    null
                }
            </ul>
         </span>
          <div className={c.container}>
            <div className={c.row_cards}>
              {
                !products && <div className={c.loader}><Loader/></div>
              }
              {
                result?.length === 0  ?
                productsCopy?.map(item => (
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
                <li 
                  key={item.id}
                  onClick={() => setSelected(item.title)}
                >
                  <Link to={`/products/category/${item.id}`}>
                    {item.title}
                  </Link>
                </li>
              ))
            }
          </ul>
        </span>
      </div>
      {
        products &&
        <div className={c.pagination}>
          <Pagination pageCount={pageCount} current={currentPage} setCurrent={setCurrentPage}/>
        </div>
      }
      
    </div>
  )
}

export default Goods