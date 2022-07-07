import StyledSignin from "./Signin.styled"
import {useRef} from "react"
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../MainPage/header/LogoComponent/Logo'

const Signin = () => {
  const modalRef = useRef()
  let history = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault()
  }

  const closeModal = e => {
    if(modalRef.current === e.target) {
      history("/");
    }
  }
  
  return (
    <StyledSignin>
      <div className='popup' ref={modalRef} onClick={closeModal}>
        <div className="popup__container">
          <div className='popup__logo'>
            <Logo/>
          </div>
          <Link to='/'>
            <div className="popup__cross"></div>
            </Link>
          <h2 className="popup__title">Вход</h2>
          <form
            name='signin'
            action="#"
            method="post"
            encType="multipart/form-data"
            className="popup__form"
            noValidate
            onSubmit={onSubmit}>
            <input
              type="email"
              className='popup__input'
              minlength="5"
              maxlength="40"
              placeholder='email'/>
            <input
              type='password'
              className='popup__input'
              minlength="4"
              maxlength="30"
              placeholder='password' />
            <Link to='/profile'>
              <button type="submit" className="popup__submit">Войти</button>
            </Link>
            <Link to='/signup' className='popup__link'>Зарегистрироваться</Link>
          </form>
        </div>
      </div>
    </StyledSignin>
  )
}

export default Signin