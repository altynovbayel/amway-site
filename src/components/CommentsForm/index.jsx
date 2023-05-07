import React from 'react'
import c from './CommentsForm.module.scss'
import { AiOutlineClose, AiOutlineReload } from 'react-icons/ai';
import { useForm } from 'react-hook-form';

const CommentsForm = ({active, setActive}) => {
  const [captchaText, setCaptchaText] = React.useState(generateCaptchaText());  
  const [ usernameField, setUsernameField ] = React.useState(false)
  const [ commentField, setCommentField ] = React.useState(false)
  const [ captchaField, setCaptchaField ] = React.useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  function generateCaptchaText() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  function refreshCaptcha() {
    setCaptchaText(generateCaptchaText());
  }

  function handleSubmitData(event) {
    if(event.username.length !== 0 && event.comment.length !== 0 && event.captcha.length !== 0){
      if (event.captcha === captchaText) {
        alert("Captcha passed!");
        setUsernameField(false)
        setCommentField(false)
        setCaptchaField(false)
        reset()
      } else {
        alert("Captcha failed!");

      }
    }
    setCaptchaText(generateCaptchaText());
  }

  return (
    <form
      className={c.commentsForm}
      onSubmit={handleSubmit(data => handleSubmitData(data))}
    >
      <li 
        className={c.close}
        onClick={() => setActive(false)}
      >
        <AiOutlineClose />
      </li>
      <div>
        <input 
          type="text"
          placeholder='Представьтесь'
          className={usernameField ? c.active : ''}
          autoComplete="off"
          {...register('username',
            {
              required: true,
              minLength: 1
            }
          )}
        />
        {errors.username && <p className={c.error}>Заполните поле</p>}
      </div>
      <div>
        <textarea 
          placeholder='Комментарий'
          className={commentField ? c.active : ''}
          autoComplete="off"
          {...register('comment', 
            {
              required: true,
              minLength: 1
            }
          )}
        />
        {errors.comment && <p className={c.error}>Заполните поле</p>}
      </div>
      <div className={c.captcha}>
        <div className={c.captchaText}>
          <p>{captchaText}</p> 
          <li
            onClick={() => refreshCaptcha()}
          >
            <AiOutlineReload />
          </li>
        </div>
        <div className={c.field}>
          <input 
            type="text" 
            placeholder='Введите символы с captcha'
            className={captchaField ? c.active : ''}
            autoComplete="off"
            {...register('captcha', 
              {
                required: true,
                minLength: 6
              }
            )}
          />
          {errors.captcha && <p className={c.error}>Заполните поле</p>}
        </div>
        <button type='submit'>Отправить</button>
      </div>
    </form>
  )
}

export default CommentsForm