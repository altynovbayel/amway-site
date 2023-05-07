import React from 'react'
import c from './CartCard.module.scss'
import { BiTrash } from 'react-icons/bi'

const CartCard = ({item}) => {
  return (
    <div 
      className={c.card}
    >
      <div className={c.left}>
        <img src={'https://i.siteapi.org/702bUrtpYtn2rP3Pjb5v5IhCMME=/0x0:600x600/fit-in/70x/center/top/filters:fill(transparent):format(png)/s2.siteapi.org/5076e086ed264d4/img/10ba1qoej13kccc4s4sgwcksw88koc'} alt="" />
        <p>{item.title.length > 30 ? `${item.title.slice(0, 30)}...` : item.title}</p>
      </div>
      <div className={c.right}>
        <input 
          type="text"
          defaultValue={1}
        />
        <li>
          <BiTrash />
        </li>
      </div>
    </div>
  )
}

export default CartCard