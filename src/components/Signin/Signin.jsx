import StyledSignin from "./Signin.styled"
import { Link } from 'react-router-dom'


const Signin = () => {
  
  const onSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <StyledSignin>
    <div className={`popup ${ true && "popup_opened"}`}>
      <div className="popup__container">
        <div className="popup__cross"></div>
        <h2 className="popup__title">Вход</h2>
        <form
          name='signin'
          action="#"
          method="post"
          encType="multipart/form-data"
          className="popup__form"
          noValidate
          onSubmit={onSubmit}>
          <input type="email" className='popup__input' minlength="5" maxlength="40" placeholder='email' />
          <input type='password' className='popup__input' minlength="4" maxlength="30" placeholder='password' />
          <button type="submit" className="popup__submit">Войти</button>
            <Link to='/signup' className='popup__link'>Зарегистрироваться</Link>
        </form>
      </div>
      </div>
      </StyledSignin>
  )
}

export default Signin