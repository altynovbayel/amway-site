import React from 'react'
import c from './Form.module.scss'
import { useForm } from 'react-hook-form'

const Form = () => {
  const {
    register,
    handleSubmit,
    reset
  } = useForm()

  function handleSend (data) {
    console.log(data);
    reset()
  }

  return (
    <div className={c.form}>
      <h1>Заполните форму</h1>
      <p>Оставьте заявку прямо сейчас, мы свяжемся с Вами незамедлительно!</p>
      <form onSubmit={handleSubmit(data => handleSend(data))}>
        <div>
          <input 
            type="text" 
            placeholder='Ваше имя' 
            {...register('name')}
          />
        </div>
        <div>
          <input 
            type="text" 
            placeholder='Контактный телефон' 
            {...register('phone')}
          />
        </div>
        <div>
          <input 
            type="email" 
            placeholder='E-mail' 
            {...register('email')}
          />
        </div>
        <button type='submit'>
          Отправить заявку
        </button>
      </form>
    </div>
  )
}

export default Form