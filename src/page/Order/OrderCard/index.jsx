import React from 'react';
import c from './OrderCard.module.scss'
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {FiTrash} from "react-icons/fi";

function OrderCard({image, count, title, price, id}) {
  
  const cart = JSON.parse(localStorage.getItem('cart'))
  
  const changeCount = (count) => {
    const index = cart.findIndex(obj => obj.id === id);
    if (index !== -1) {
      if (count > 0) {
        cart[index].count = count;
      }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  const deleteItem = () => {
    const index = cart?.findIndex(obj => obj.id === id);
    if (index !== -1) {
      cart.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  return (
    <div className={c.product_card}>
      <div className={c.product_title}>
        <img
          src={image}
          alt=""/>
        <div className={c.product_name}>
          <p>{title}</p>
          <span>Единица измерения: шт</span>
        </div>
      </div>
      <div className={c.product_price}>
        <div className={c.price}>
          {price} руб.
        </div>
        <div className={c.count}>
          <AiOutlineMinus onClick={() => changeCount(count - 1)}/>
          <input type="number" value={count}/>
          <AiOutlinePlus onClick={() => changeCount(count + 1)}/>
        </div>
        <div className={c.total_price}>
          {price * count} руб.
          <span onClick={deleteItem}>
          <FiTrash/>
        </span>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;