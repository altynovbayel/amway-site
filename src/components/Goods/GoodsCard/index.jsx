import React from 'react'
import c from './GoodsCard.module.scss'
import {SlBasket} from 'react-icons/sl'
import {Link} from 'react-router-dom'

const GoodsCard = ({image, title, price, id, obj}) => {

  const postToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart'))
    const check = cart?.find(item => item?.id === obj?.id)
    check === undefined && cart.push({...obj, count: 1})
    localStorage.setItem('cart', JSON.stringify(cart))
  }
  
  return (
    <div className={c.card}>
      <div className={c.image}>
        <img
          src="https://i.siteapi.org/g3bBwFfNj_wNmVuAkQEJGUvYxcI=/0x0:1078x607/fit-in/250x190/center/top/filters:fill(transparent):format(webp)/5076e086ed264d4.s2.siteapi.org/img/3knfrycc34u8cgogsk0gws4sk88s00"
          alt=""
        />
        <button onClick={postToCart}>
          <SlBasket/> В КОРЗИНУ
        </button>
      </div>
      <div className={c.details}>
        <Link to={`/products/${id}/`}>
          <h4>{title}</h4>
        </Link>
        <h3>{price} ₽</h3>
      </div>
    </div>
  )
}

export default GoodsCard