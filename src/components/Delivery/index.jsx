import React from 'react';
import c from './Delivery.module.scss'
import Title from "../Title";

function Delivery() {
  return (
    <div className={c.delivery}>
      <Title title={'ДОСТАВКА'}/>
      <div className={c.delivery_text}>
        <p>
          Доставка осуществляется БЫСТРО и БЕСКОНТАКТНО
        </p>
        <div>
          <p>
            Стоимость доставки по г. Москве:
          </p>
          <p>
            при заказе на сумму от 3000 р  - доставка бесплатная
          </p>
          <p>
            при заказе на сумму до 3000 р - доставка 400 р
          </p>
        </div>
        <p>Стоимость доставки по Московкой области обговаривается индивидуально.</p>
      </div>
    </div>
  );
}

export default Delivery;