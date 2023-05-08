import React from 'react';
import c from './Category.module.scss'
import {useParams} from "react-router-dom";
import {api} from "../../config/api";
import Loader from "../../components/Loader";
import Title from "../../components/Title";
import {AiOutlineSearch} from "react-icons/ai";
import DoubleSlider from "../../components/DoubleSlider";
import GoodsCard from "../../components/Goods/GoodsCard";
import {useForm} from "react-hook-form";

function Category() {
  const [data, setData] = React.useState(null)
  const {id} = useParams()
  const [ result, setResult ] = React.useState([])
  const [values, setValues] = React.useState([0, 9500]);
  
  React.useEffect(() => {
    api.getSingleCategory(id).then(r => r?.data && setData(r.data))
  }, [])
  
  const priceFilter = () => {
    const res = data.product_data?.filter(el => el.price >= values[0] && el.price <= values[1])
    res && setResult(res)
  }
  
  const {
    register ,
    handleSubmit
  } = useForm()
  
  const searching = (search) => {
    const res = data?.product_data.filter(item => item.title.toLowerCase().includes(search.search.toLowerCase()))
    setResult(res);
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
                !data && <div className={c.loader}><Loader/></div>
              }
              {
                result?.length === 0  ?
                  data?.product_data?.map(item => (
                    <GoodsCard
                      key={item.id}
                      image={`https://amway.pythonanywhere.com/${item.image}`}
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
                        image={`https://amway.pythonanywhere.com//${item.image}`}
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
        </span>
      </div>
    </div>
  );
}

export default Category;