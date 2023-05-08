import React from 'react'
import { useParams } from 'react-router-dom'
import c from './More.module.scss'
import Title from '../../components/Title'
import { api } from '../../config/api'
import { SlBasket } from 'react-icons/sl'

const More = () => {
  const [ product, setProduct ] = React.useState(null)
  const { id } = useParams()

  const cart = JSON.parse(localStorage.getItem('cart'))
  const check = cart?.find(item => item?.id === id)
  const index = cart?.findIndex(obj => obj.id === id);

  React.useEffect(() => {
    api.getProduct(id)
      .then(res => setProduct(res.data))
  }, []) 

  const postToCart = () => {
    check === null || check === undefined || !check ? cart.push({...product, count: 1}) : cart[index].count = cart[index].count + 1;
    localStorage.setItem('cart', JSON.stringify(cart))
  }

  return (
    <div className={c.more}>
      <div className={c.title}>
        <Title title={product?.title}/>
      </div>
      <div className={c.details}>
        <div className={c.left}>
          <img 
            src={product?.image}
            alt=""
          />
        </div>
        <div className={c.right}>
          <h2>{product?.title}</h2>
          <h1>{product?.price} руб</h1>
          <button onClick={() => postToCart()}>
            <SlBasket /> В корзину
          </button>
          <p className={c.desc}>Описание:</p>
          <p>
            {product?.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default More