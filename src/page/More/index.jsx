import React from 'react'
import { useParams } from 'react-router-dom'
import c from './More.module.scss'
import Title from '../../components/Title'
import { api } from '../../config/api'
import { SlBasket } from 'react-icons/sl'

const More = () => {
  const [ product, setProduct ] = React.useState(null)
  const { id } = useParams()

  React.useEffect(() => {
    api.getProduct(id)
      .then(res => setProduct(res.data))

    console.log(product);
  }, []) 

  return (
    <div className={c.more}>
      <div className={c.title}>
        <Title title={product?.title}/>
      </div>
      <div className={c.details}>
        <div className={c.left}>
          <img 
            src="https://i.siteapi.org/g3bBwFfNj_wNmVuAkQEJGUvYxcI=/0x0:1078x607/fit-in/250x190/center/top/filters:fill(transparent):format(webp)/5076e086ed264d4.s2.siteapi.org/img/3knfrycc34u8cgogsk0gws4sk88s00" 
            alt=""
          />
        </div>
        <div className={c.right}>
          <h2>{product?.title}</h2>
          <h1>{product?.price} руб</h1>
          <button>
            <SlBasket /> В корзину
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