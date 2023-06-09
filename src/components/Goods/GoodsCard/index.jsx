import React from 'react'
import c from './GoodsCard.module.scss'
import {SlBasket} from 'react-icons/sl'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import Cart from '../../Cart'

const GoodsCard = ({image, title, price, id, obj}) => {
  const [ active, setActive ] = React.useState(false)
  const [ activeCart, setActiveCart ] = React.useState(false)
  const [ dep, setDep ] = React.useState('')

  const cart = JSON.parse(localStorage.getItem('cart'))
  const check = cart?.find(item => item?.id === obj?.id)
  const index = cart?.findIndex(obj => obj.id === id);

  React.useEffect(() => {
    setTimeout(() => {
      const check = cart?.find(item => item?.id === obj?.id)
      check ? setActive(true) : setActive(false)
      setDep(Math.random())
    }, 100)
  }, [dep])

  const postToCart = () => {
    !check ? cart?.push({...obj, count: 1, image: image}) : cart[index].count = cart[index].count + 1;
    localStorage.setItem('cart', JSON.stringify(cart))
    if(window.innerWidth > 768){
      setActiveCart(true)
      setTimeout(() => {
        setActiveCart(false)
      }, 1000)
    }
  }

  const increment = () => {
    !check ? cart?.push({...obj, count: 1}) : cart[index].count = cart[index].count + 1;
    localStorage.setItem('cart', JSON.stringify(cart))
  }  
  
  const deleteItem = () => {
    const index = cart?.findIndex(item => item.id === obj.id);
    if (index !== -1) {
      cart?.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  const decrement = () => {
    !check ? cart?.push({...obj, count: 1}) : cart[index].count = cart[index].count - 1;
    localStorage.setItem('cart', JSON.stringify(cart))
    if(cart[index].count === 0){
      deleteItem()
    }
  }

  const Navigate = useNavigate()

  return (
    <div className={c.card}>
      <div
        className={c.up}
        onClick={() => Navigate(`/products/${id}/`)} 
      >
        <img 
          src={image}
          alt=""
        />
        <p>
          {title.length > 55 ? `${title.slice(0, 55)}...` : title}
        </p>
      </div>
      <div className={c.down}>
        <h3>{price} ₽</h3>
        {
          active ?
            <div className={c.quantity}>
              <h4>Кол-во</h4>
              <ul>
                <li
                  onClick={decrement}
                >
                  <BiMinus />
                </li>
                <input 
                  type="text"
                  value={cart[index]?.count ? cart[index]?.count : 1}  
                />
                <li
                  onClick={increment}
                >
                  <BiPlus />
                </li>
              </ul>
            </div>
          :
          null
        }
        {
          !check ? 
          <button
            onClick={() => postToCart()}
          >
            <SlBasket /> <span>Добавить в корзину </span>
          </button> :
          <button className={c.added}>
            <SlBasket /> <span>Добавлено в корзину </span>
          </button>
        }
      </div>

      {
        activeCart ? <Cart /> : null
      }
    </div>
  )
}

export default GoodsCard