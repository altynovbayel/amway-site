import React from 'react';
import c from './Category.module.scss'
import {Link, useParams} from "react-router-dom";
import {api} from "../../config/api";
import Loader from "../../components/Loader";
import Title from "../../components/Title";
import {AiOutlineSearch} from "react-icons/ai";
import DoubleSlider from "../../components/DoubleSlider";
import GoodsCard from "../../components/Goods/GoodsCard";
import {ScrollToTop} from "../../helpers";
import Pagination from "../../components/Pagination";

function Category() {
  const [data, setData] = React.useState(null)
  const {id} = useParams()
  const [result, setResult] = React.useState([])
  const [values, setValues] = React.useState([0, 50000]);
  const [categories, setCategories] = React.useState(null)
  const [activeCategories, setActiveCategories] = React.useState(false)
  const [searchResult, setSearchResult] = React.useState(null)
  const [search, setSearch] = React.useState('')
  const [selected, setSelected] = React.useState('')
  // pagination
  const [productsCopy, setProductsCopy] = React.useState([])
  const [currentPage, setCurrentPage] = React.useState(1)
  const limit = 10
  const pageCount = Math.ceil(data?.product_data.length / limit)
  const lastContentIndex = currentPage * limit;
  const firstContentIndex = lastContentIndex - limit;
  
  React.useEffect(() => {
    ScrollToTop()
    api.getSingleCategory(id).then(r => r?.data && setData(r.data))
    api.getCategories().then(res => {
      setCategories(res.data)
      const category = res.data.find(item => item.id === Number(id))
      setSelected(category.title);
    })
  }, [id])
  
  React.useEffect(() => {
    data?.product_data.length > 10 ?
    setProductsCopy(data?.product_data.slice(firstContentIndex, lastContentIndex)) :
      setProductsCopy(data?.product_data)
  }, [currentPage, data, id])
  
  const priceFilter = () => {
    const res = data?.product_data?.filter(el => el.price >= values[0] && el.price <= values[1])
    res && setResult(res)
  }
  
  const searching = () => {
    const res = data?.product_data.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
    setResult(res);
    setSearch('')
  }
  
  const searchingOnType = (e) => {
    const res = data?.product_data.filter(item => item.title.toLowerCase().includes(e.toLowerCase()))
    setSearchResult(res);
  }
  
  React.useEffect(() => {
    const cart = localStorage.getItem('cart')
    !cart && localStorage.setItem('cart', JSON.stringify([]))
  }, [])
  
  
  return (
    <div className={c.catalog}>
      <Title title={data?.title}/>
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
                search.length > 0 ?
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
              <AiOutlineSearch/>
              <span>Найти</span>
            </button>
          </form>
          <span className={c.price_layout}>
           <DoubleSlider setValues={setValues} values={values} show={priceFilter}/>
           <ul className={c.categories_phone}>
              <h4>Категории: <span
                onClick={() => setActiveCategories(!activeCategories)}>{selected?.length > 20 ? `${selected?.slice(0, 20)}...` : selected}</span></h4>
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
                         <Link
                           to={`/products/category/${item.id}/`}
                           onClick={() => setActiveCategories(false)}
                         >
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
                !data && <div className={c.loader}><Loader/></div>
              }
              {
                data?.product_data?.length === 0 && <span className={c.empty}>Ничего нет</span>
              }
              {
                result?.length === 0 ?
                  productsCopy?.map(item => (
                    <GoodsCard
                      key={item.id}
                      image={`https://amway.pythonanywhere.com/${item.image}`}
                      title={item.title}
                      price={item.price}
                      id={item.id}
                      obj={item}
                    />
                  )) :
                  result?.length === 0 ?
                    <div className={c.nothing}>
                      <h2>Ничего нет</h2>
                    </div>
                    :
                    result?.map(item => (
                      <GoodsCard
                        key={item.id}
                        image={`https://amway.pythonanywhere.com/${item.image}`}
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
          <DoubleSlider setValues={setValues} values={values} show={priceFilter}/>
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
      {
        data?.product_data?.length > 10 &&
        <div className={c.pagination}>
          <Pagination pageCount={pageCount} current={currentPage} setCurrent={setCurrentPage}/>
        </div>
      }
    </div>
  );
}

export default Category;