import React from 'react'
import c from './Form.module.scss'
import { useForm } from 'react-hook-form'
import { api } from '../../config/api'
import Alert from "../Alert";

const Form = () => {
  const [ nameError, setNameError ] = React.useState(false)
  const [ phoneError, setPhoneError ] = React.useState(false)
  const [ gmailError, setGmailError ] = React.useState(false)
  const [ alertActive, setAlertActive ] = React.useState(false)

  const {
    register,
    handleSubmit,
    reset
  } = useForm()

  function handleSend (data) {
    if(data?.name.length === 0 || data?.phone_number.length === 0 || data?.gmail.length === 0){
      if(data?.name.length === 0){
        setNameError(true)
      }else{
        setNameError(false)
      }

      if(data?.phone_number.length === 0){
        setPhoneError(true)
      }else{
        setPhoneError(false)
      }

      if(data?.gmail.length === 0){
        setGmailError(true)
      }else{
        setGmailError(false)
      }

    }else{
      api.postConsultation(data)
        .then(() => {
          setAlertActive(!alertActive)
          setNameError(false)
          setPhoneError(false)
          setGmailError(false)
        })
    }
    reset()
  }

  return (
    <div className={c.form_container}>
      <div className={c.form}>
        <h1>Заполните форму</h1>
        <p>Оставьте заявку прямо сейчас, мы свяжемся с Вами незамедлительно!</p>
        <form onSubmit={handleSubmit(data => handleSend(data))}>
          <div>
            <input 
              type="text" 
              placeholder='Ваше имя' 
              className={nameError ? c.error : null}
              {...register('name')}
            />
          </div>
          <div>
            <input 
              type="text" 
              placeholder='Контактный телефон' 
              className={phoneError ? c.error : null}
              {...register('phone_number')}
            />
          </div>
          <div>
            <input 
              type="email" 
              placeholder='E-mail' 
              className={gmailError ? c.error : null}
              {...register('gmail')}
            />
          </div>
          <button type='submit'>
            Отправить заявку
          </button>
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
    </div>
  )
}

export default Form