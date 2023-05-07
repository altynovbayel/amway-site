import React from 'react'
import c from './Cart.module.scss'
import CartCard from './CartCard'

const Cart = ({setActiveCart}) => {
  const [ cart, setCart ] = React.useState(null)
  const [ dep, setDep ] = React.useState(null)

  React.useEffect(() => {
    setTimeout(() => {
      setDep(Math.random())
      setCart(JSON.parse(localStorage.getItem('cart')))
    }, 100)
  }, [dep])

  return (
    <div className={c.cart}>
      {
        !cart || cart.length === 0 ?
        <div className={c.empty}>
          <h2>Корзина пустая.</h2>
        </div> :
        cart?.map(item => (
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