import React from 'react';
import c from './Navbar.module.scss'
import {FaBars} from "react-icons/fa";
import {navlist} from "../../utils/list";
import {Link, NavLink} from "react-router-dom";
import {IoIosArrowDown} from "react-icons/io";
import {SlBasket} from 'react-icons/sl'
import Sidebar from '../Sidebar';
import Cart from '../Cart';

function Navbar() {
  const [active, setActive] = React.useState(false)
  const [activeCart, setActiveCart] = React.useState(false)
  const [cartCount, setCartCount] = React.useState(0)
  const [dep, setDep] = React.useState('0')

  const getCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart'))
    cart && setCartCount(cart.length)
  }
  
  React.useEffect(() => {
    getCart()
    setTimeout(() => {
      setDep(Math.random())
    }, 100)
  }, [dep])
  
  return (
    <div className={c.navbar}>
      {/* <div className={c.top_navbar}>
        <div className={c.phone}>
          <FaPhoneAlt/>
          <a  href="tel:89855018480">
            8 985 501-84-80
          </a>
        </div>
        <div className={c.feedback}>
          <div className={c.message}>
            <CgMail/>
            <span>
              НАПИШИТЕ НАМ
            </span>
          </div>
          <div className={c.callback}>
            <div>
              <svg id="callback_icon" width="15" height="15" data-name="callback icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 15">
                <path fill="#555555" d="M17.88,1.5a10.32,10.32,0,0,0-1-1A1.45,1.45,0,0,0,16,0a2,2,0,0,0-1,.48,7.38,7.38,0,0,0-1.22,1.14A5.06,5.06,0,0,0,12.91,3,0.89,0.89,0,0,0,13,4a4.35,4.35,0,0,0,1.38,1A1,1,0,0,1,15,6a2.35,2.35,0,0,1-.62,1.5Q13.75,8.25,13,9t-1.5,1.38A2.35,2.35,0,0,1,10,11a1,1,0,0,1-1-.63A4.35,4.35,0,0,0,8,9a0.89,0.89,0,0,0-1-.09,5.06,5.06,0,0,0-1.33.84A7.37,7.37,0,0,0,4.48,11,2,2,0,0,0,4,12a1.45,1.45,0,0,0,.47.89,10.36,10.36,0,0,0,1,1Q6.06,14.34,7,15a6,6,0,0,0,1.82-.35,16.1,16.1,0,0,0,2.2-.92,19.94,19.94,0,0,0,2.19-1.28A12,12,0,0,0,15,11a12.05,12.05,0,0,0,1.45-1.79A20,20,0,0,0,17.73,7a16,16,0,0,0,.92-2.2A6,6,0,0,0,19,3Q18.34,2.06,17.88,1.5ZM6,6L9,3,6,0V2H1V4H6V6Z"></path>
              </svg>
            </div>
            <span>
              ОБРАТНЫЙ ЗВОНОК
            </span>
          </div>
        </div>
      </div>
       */}
      <div className={c.navlist}>
        <div className={c.container}>
          <ul className={c.bars}>
            <li
              onClick={() => setActive(!active)}
            >
              <FaBars />
            </li>
          </ul>
          <div className={c.logo}>
            <li>
              <Link to="/">
                <img 
                  src="https://www.amway.com/medias/amway-logo-black.svg?context=bWFzdGVyfGltYWdlc3w0OTI1fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g3YS9oNTYvODg4ODM0NDI0ODM1MC5zdmd8YmI0MmY2MzMxZjc2ZmVkZjAzNDAxMjhmOWRlYjYyMzc4ODJmZWQ2ZTQ1MmQ4NDA5YjM2Y2VhNDc2NjFmNzcxYg" 
                  alt="logo"
                />
              </Link>
            </li>
          </div>
          <ul>
            {
              navlist.map(item => (
                <li key={item.id} >
                  <NavLink
                    to={item.route}
                    className={({ isActive }) => (isActive ? c.active_route : c.inactive_route)}
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))
            }
            <li 
              className={c.basket}
              onClick={() => setActiveCart(!activeCart)}
            >
              <SlBasket/>
              <span>{cartCount}</span>
              <IoIosArrowDown/>
            </li>
          </ul>
          {activeCart ? <Cart setActiveCart={setActiveCart} /> : null}
        </div>
      </div>

      <Sidebar 
        active={active}
        setActive={setActive}
      />
    </div>
  );
}

export default Navbar;