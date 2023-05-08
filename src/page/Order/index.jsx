import React from 'react';
import c from './Order.module.scss'
import Title from "../../components/Title";
import OrderCard from "./OrderCard";


function Order() {
  const [data, setData] = React.useState(null)
  const [ dep, setDep ] = React.useState(null)
  
  React.useEffect(() => {
    setTimeout(() => {
      setDep(Math.random())
      setData(JSON.parse(localStorage.getItem('cart')))
    }, 100)
  }, [dep])
  

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
            <div className={c.cart_list}>
              <div className={c.category}>
                <p>
                  ТОВАР
                </p>
                <div className={c.category_2}>
                  <p>КОЛИЧЕСТВО	</p>
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
            </div> :
            <span className={c.empty_msg}>КОРЗИНА ПУСТА</span>
        }
      </div>
    </div>
  );
}

export default Order;