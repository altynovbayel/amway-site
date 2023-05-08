import React from 'react'
import c from './CartCard.module.scss'
import { BiTrash } from 'react-icons/bi'

const CartCard = ({item}) => {
  const cart = JSON.parse(localStorage.getItem('cart'))

  const changeCount = (count) => {
    const index = cart.findIndex(obj => obj.id === item.id);
    if (index !== -1) {
      cart[index].count = count;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  const deleteItem = () => {
    const index = cart?.findIndex(obj => obj.id === item.id);
    if (index !== -1) {
      cart.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  console.log(item)
  return (
    <div 
      className={c.card}
    >
      <div className={c.left}>
        <img src={item.image} alt="" />
        <p>{item.title.length > 30 ? `${item.title.slice(0, 30)}...` : item.title}</p>
      </div>
      <div className={c.right}>
        <input 
          type="text"
          value={item.count}
          onChange={e => changeCount(Number(e.target.value))}
        />
        <li
          onClick={() => deleteItem()}
        >
          <BiTrash />
        </li>
      </div>
    </div>
  )
}

export default CartCard