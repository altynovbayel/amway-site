import React from 'react'
import c from './Cart.module.scss'
import CartCard from './CartCard'
import {useNavigate} from "react-router-dom";

const Cart = ({setActiveCart}) => {
  const [ cart, setCart ] = React.useState(null)
  const [ dep, setDep ] = React.useState(null)
  const navigate = useNavigate()
  
  const toCartPage = () => {
    navigate('/cart/')
    setActiveCart(false)
  }

  React.useEffect(() => {
    setTimeout(() => {
      setDep(Math.random())
      setCart(JSON.parse(localStorage.getItem('cart')))
    }, 100)
  }, [dep])

  return (
    <div className={c.cart}>
      <div className={cart?.length > 3 ? c.cart_scroll : ''}>
        {
          !cart || cart.length === 0 ?
            <div className={c.empty}>
              <h2>Корзина пустая.</h2>
            </div> :
            cart?.map((item, i) => (
              <CartCard 
                key={i}
                item={item}
              />
            ))
        }
      </div>
      {
        cart && cart?.length !== 0 ? 
        <div className={c.totalPrice}>
          <h2>Всего: {cart?.reduce((acc, obj) => acc + obj.count * obj.price, 0)} ₽</h2>
        </div> :
        null
      }
      <div className={c.btns}>
        <button 
          onClick={() => setActiveCart(false)}
        >
          продолжить покупки
        </button>
        <button onClick={toCartPage}>
          оформить заказ
        </button>
      </div>
    </div>
  )
}

export default Cart