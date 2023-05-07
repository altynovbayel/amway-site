import React from 'react';
import c from './OrderCard.module.scss'
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {FiTrash} from "react-icons/fi";

function OrderCard({count, title, price, id}) {
  
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
          src="https://i.siteapi.org/QbpiMfpeevPTWa8HXEtpCfrsiu0=/0x0:600x600/fit-in/70x/center/top/filters:fill(transparent):format(png)/5076e086ed264d4.s2.siteapi.org/img/ssbgj8kqqxww44ooc00c84kwkws80c"
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