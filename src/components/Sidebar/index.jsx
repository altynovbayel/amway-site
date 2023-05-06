import React from 'react'
import c from './Sidebar.module.scss'
import { navlist } from '../../utils/list'
import { Link, useResolvedPath } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'

const Sidebar = ({active, setActive}) => {
  const route = useResolvedPath()

  return (
    <div className={active ? c.sidebar : c.sidebar_none}>
      <div className={c.up}>
        <li>МЕНЮ</li>
        <li
          onClick={() => setActive(false)}
        >
          <AiOutlineClose />
        </li>
      </div>
      <span></span>
      <ul className={c.nav}>
        {
          navlist.map(item => (
            <li key={item.id}>
              <Link 
                to={item.route} 
                className={route.pathname === item.route ? c.active : ''}
                onClick={() => setActive(false)}
              >
                {item.title}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Sidebar