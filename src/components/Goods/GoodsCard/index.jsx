import React from 'react'
import c from './GoodsCard.module.scss'
import { SlBasket } from 'react-icons/sl'
import { Link } from 'react-router-dom'

const GoodsCard = ({image, title, price, id}) => {
  return (
    <div className={c.card}>
      <div className={c.image}>
        <img 
          src="https://i.siteapi.org/g3bBwFfNj_wNmVuAkQEJGUvYxcI=/0x0:1078x607/fit-in/250x190/center/top/filters:fill(transparent):format(webp)/5076e086ed264d4.s2.siteapi.org/img/3knfrycc34u8cgogsk0gws4sk88s00" 
          alt="" 
        />
        <button>
          <SlBasket/> В КОРЗИНУ
        </button>
      </div>
      <Link to={`/products/${id}/`}>
        <h4>{title}</h4>
      </Link>
      <h3>{price} ₽</h3>
    </div>
  )
}

export default GoodsCard