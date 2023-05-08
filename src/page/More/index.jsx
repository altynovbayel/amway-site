import React from 'react'
import { useParams } from 'react-router-dom'
import c from './More.module.scss'
import Title from '../../components/Title'
import { SlBasket } from 'react-icons/sl'
import {BiMinus, BiPlus} from "react-icons/bi";
import {GetProduct} from "../../helpers";

const More = () => {
  const { id } = useParams()
  const [cart, setCart] = React.useState(null)
  const [dep, setDep] = React.useState(0)
  
  const check = cart?.find(item => item?.id === Number(id))
  const index = cart?.findIndex(obj => obj.id === Number(id));
  const {product} = GetProduct(Number(id))
  
  React.useEffect(() => {
    const data = JSON.parse(localStorage.getItem('cart'))
    setCart(data)
    setTimeout(() => {
      setDep(Math.random())
    }, 100)
  }, [dep])

  const postToCart = () => {
    !check && cart?.push({...product, count: 1})
    localStorage.setItem('cart', JSON.stringify(cart))
  }
  
  const increment = () => {
    !check ? cart?.push({...product, count: 1}) : cart[index].count = cart[index].count + 1;
    localStorage.setItem('cart', JSON.stringify(cart))
  }
  
  const decrement = () => {
    !check ? cart?.push({...product, count: 1}) : cart[index].count = cart[index].count - 1;
    localStorage.setItem('cart', JSON.stringify(cart))
    if(cart[index]?.count === 0){
      deleteItem()
    }
  }
  
  const deleteItem = () => {
    const index = cart?.findIndex(item => item.id === product?.id);
    if (index !== -1) {
      cart?.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
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
          {
            check ?
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
              </div> : null
          }
          <button className={check ? c.active : ''} onClick={() => postToCart()}>
            <SlBasket /> {check ? 'В корзине' : 'В корзину'}
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