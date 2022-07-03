import styled from 'styled-components'

// const styledButton = styled(styledComponent)` `

const StyledSignin = styled.div `
.popup {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  visibility: hidden;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: visibility 0.5s, opacity 0.5s linear;

&_opened {
  opacity: 1;
  visibility: visible;
}

&__container {
  width: 448px;
  border-radius: 20px;
  background-color: #FCFCFD;
  display: flex;
  flex-direction: column;
  position: relative;
}

&__title {
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  color: #23262F;
  margin-top: 32px;
  margin-left: 32px;
  margin-bottom: 30px;
}

&__cross {
  width: 17px;
  height: 17px;
  position: absolute;
  right: 55px;
  top: 45px;
  cursor: pointer;
  transition: opacity .3s linear;
}

&__cross:hover {
  opacity: 0.7;
}

&__cross:before,
&__cross:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 14px;
  width: 2px;
  background-color: #23262F;
}

&__cross:before {
  transform: rotate(45deg);
}

&__cross:after {
  transform: rotate(-45deg);
}

&__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

&__input {
  margin: 0;
  padding: 0;
  padding-bottom: 3px;
  padding-left: 15px;
  box-sizing: border-box;
  border: none;
  width: 384px;
  height: 48px;
  font-size: 14px;
  line-height: 17px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  background-color: #fff;
}

&__submit {
  width: 384px;
  height: 48px;
  color: #EF466F;
  border-radius: 90px;
  border-color: rgba(0, 0, 0, 0.2);
  background-color: #e8eaf3;
  margin-bottom: 25px;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  margin-top: 30px;
  transition: transform .5s;
}

&__submit:hover {
  transform: scale(1.02);
}

&__link {
text-decoration: none;
margin-bottom: 20px;
font-weight: 400;
font-size: 14px;
line-height: 24px;
color: #777E91;
transition: color .3s linear;
}

&__link:hover {
  color: #23262F;
}
}
`

export default StyledSignin