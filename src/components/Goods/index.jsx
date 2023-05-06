import React from 'react'
import Title from '../Title'
import c from './Goods.module.scss'
import { AiOutlineSearch } from 'react-icons/ai'
import { catalogList } from '../../utils/list'
import CatalogCard from '../Catalog/CatalogCard'
import { GetProducts } from '../../helpers'
import { useForm } from 'react-hook-form'
import GoodsCard from './GoodsCard'

const Goods = () => {
  const { products } = GetProducts()
  const [ result, setResult ] = React.useState([])

  const {
    register ,
    handleSubmit
  } = useForm()

  const searching = (search) => {
    const res = products?.filter(item => item.title.toLowerCase().includes(search.search.toLowerCase())) 
    setResult(res);
  }  

  return (
    <div className={c.catalog}>
      <Title title={'каталог товаров'}/>
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
      <div className={c.container}>
        <div className={c.row_cards}>
          {
            result?.length === 0 ?
            catalogList.map(item => (
              <CatalogCard key={item.id} title={item.title} img={item.img}/>
            )) :
            result.map(item => (
              <GoodsCard key={item.id} title={item.title} img={item.img}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Goods