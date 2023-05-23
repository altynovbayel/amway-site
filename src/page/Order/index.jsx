import React from 'react';
import c from './Order.module.scss'
import Title from "../../components/Title";
import OrderCard from "./OrderCard";
import OrderForm from "../../components/OrderForm";
import {ScrollToTop} from "../../helpers";


function Order() {
  const [data, setData] = React.useState(null)
  const [dep, setDep] = React.useState(null)
  const [show, setShow] = React.useState(false)
  
  React.useEffect(() => {
    setTimeout(() => {
      setDep(Math.random())
      setData(JSON.parse(localStorage.getItem('cart')))
    }, 100)
  }, [dep])
  
  React.useEffect(() => {
    ScrollToTop()
  }, [])
  
  return (
    <div className={c.cart}>
      <div className={c.title}>
        <Title title={'корзина'}/>
      </div>
      <div className={c.container}>
        <div className={c.product_title}>
          <h3>
            ТОВАРЫ
          </h3>
          <span></span>
        </div>
        
        {
          data?.length > 0 ?
            <div className={c.cart_list} style={show ? {display: "none"} : {display: "block"}}>
              <div className={c.category}>
                <p>
                  ТОВАР
                </p>
                <div className={c.category_2}>
                  <p>КОЛИЧЕСТВО </p>
                  <p>СТОИМОСТЬ</p>
                </div>
              </div>
              <div className={c.products}>
                {
                  data?.map(item => (
                    <OrderCard key={item.id} {...item}/>
                  ))
                }
              </div>
              <div className={c.total_price}>
                <p>ИТОГО:</p>
                <p>
                  {data?.reduce((acc, obj) => acc + obj.count * obj.price, 0)} руб.
                </p>
              </div>
              
              <div className={c.next}>
                <button onClick={() => setShow(true)}>
                  продолжить
                </button>
              </div>
            </div> :
            <span className={c.empty_msg}>КОРЗИНА ПУСТА</span>
        }
      </div>
      <div style={show ? {display: "block"} : {display: "none"}}>
        <OrderForm setShow={setShow}/>
      </div>
    </div>
  );
}

export default Order;