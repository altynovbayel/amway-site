import React from 'react';
import {useForm} from "react-hook-form";
import c from './OrderForm.module.scss'
import {api} from "../../config/api";
import Alert from '../Alert';
import {ScrollToTop} from "../../helpers";

function OrderForm({setShow}) {
  const [ alertActive, setAlertActive ] = React.useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors, isValid},
  } = useForm({
    mode: "onChange"
  })
  
  React.useEffect(() => {
    ScrollToTop()
    const cart = JSON.parse(localStorage.getItem('cart'))
    console.log(`${cart[0]?.title} ${cart[0]?.count} * ${cart[0]?.price} = ${cart[0]?.price * cart[0]?.count }`)
    console.log(
      cart.map(item => `${item.title} - ${item.count}шт * ${item.price}руб = ${item.price * item.count }руб`)
    )
  }, [])
  
  function send(data) {
    api.postOrder({...data, product: 4 })
      .then(() => {
        setAlertActive(!alertActive)
        reset()
      })
  }
  
  return (
    <div className={c.order_form}>
      <form onSubmit={handleSubmit(data => send(data))}>
        <div>
          <input
            type="text"
            placeholder='Имя'
            className={errors.name ? c.error_inp : ''}
            {...register('name', {required: '⚠ Обязательное поле'})}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder='E-mail'
            className={errors.email ? c.error_inp : ''}
            {...register('gmail', {required: '⚠ Обязательное поле'})}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder='Контактный телефон'
            className={errors.phone ? c.error_inp : ''}
            {...register('phone_number', {required: '⚠ Обязательное поле'})}
          />
        </div>
        
        <div>
          <input
            type="text"
            placeholder='Адрес доставки'
            className={errors.address ? c.error_inp : ''}
            {...register('address', {required: '⚠ Обязательное поле'})}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder='Комментарий'
            className={errors.comment ? c.error_inp : ''}
            {...register('comment', {required: '⚠ Обязательное поле'})}
          />
        </div>
        <div className={c.form_buttons}>
         <span onClick={() => setShow(false)}>
           НАЗАД
         </span>
          <button type='submit' disabled={!isValid}>
            Отправить заявку
          </button>
        </div>
      </form>

      {
        alertActive ?
        <Alert
          item={{
            title: 'Спасибо за заказ!',
            comment: '',
            icon: 'success'
          }}
          setActive={setAlertActive}
        />
        :
        null
      }
    </div>
  );
}

export default OrderForm;