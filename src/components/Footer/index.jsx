import React from 'react'
import c from './Footer.module.scss'

const Footer = () => {
  return (
    <section>
      <div className={c.footer}>
        <span></span>
        <p>Не является официальным сайтом компании Amway. 2023г</p>
        <p>Все права на товарные и торговые марки принадлежат ООО "Амвэй"</p>
      </div>
    </section>
  )
}

export default Footer