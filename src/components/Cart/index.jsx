import React from 'react'
import c from './Cart.module.scss'
import CartCard from './CartCard'

const Cart = ({setActiveCart}) => {
  const cart = JSON.parse(localStorage.getItem('cart'))

  return (
    <div className={c.cart}>
      {
        !cart || cart.length === 0 ?
        <h2>Корзина пустая.</h2> :
        cart.map(item => (
          <CartCard 
            key={item.id}
            item={item}
          />
        ))
      }
      <div className={c.btns}>
        <button 
          onClick={() => setActiveCart(false)}
        >
          продолжить покупки
        </button>
        <button>
          оформить заказ
        </button>
      </div>
    </div>
  )
}

export default Cart