import styled from 'styled-components'
import StyledSignin from '../Signin/Signin.styled'

const styledSignup = styled(StyledSignin)`
.popup__checkbox-block {
  width: 384px;
}

.popup__license{
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }

.custom-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.custom-checkbox+label {
  display: inline-flex;
  align-items: center;
  user-select: none;
}

.custom-checkbox+label::before {
  content: '';
  display: inline-block;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #adb5bd;
  border-radius: 4px;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}

.custom-checkbox:checked+label::before {
  border-color: #0b76ef;
  background-color: #0b76ef;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}

.custom-checkbox:not(:disabled):not(:checked)+label:hover::before {
  border-color: #b3d7ff;
}

/* стили для активного состояния чекбокса (при нажатии на него) */
.custom-checkbox:not(:disabled):active+label::before {
  background-color: #b3d7ff;
  border-color: #b3d7ff;
}

/* стили для чекбокса, находящегося в фокусе */
.custom-checkbox:focus+label::before {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

/* стили для чекбокса, находящегося в фокусе и не находящегося в состоянии checked */
.custom-checkbox:focus:not(:checked)+label::before {
  border-color: #80bdff;
}

/* стили для чекбокса, находящегося в состоянии disabled */
.custom-checkbox:disabled+label::before {
  background-color: #e9ecef;
}

.popup__block-img {
  width: 104px;
  display: flex;
  justify-content: space-between;
}

.popup__img {
  transition: transform .3s;
  cursor: pointer;
}

.popup__img:hover {
  transform: scale(1.2);
}
`

export default styledSignup