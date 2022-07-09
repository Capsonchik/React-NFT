import styled from 'styled-components'

const styledCreatorNetwork = styled.div`
.creator-network {
  padding-top: 128px;
  display: flex;
  gap: 128px;

&__img {
  max-width: 640px;
  border-radius: 20px;
}

&__block-info {
  max-width: 352px;
  display: flex;
  flex-direction: column;
  align-items:center;
}
}
.creator-info {

&__title {
  font-weight: 700;
  font-size: 64px;
  line-height: 64px;
  letter-spacing: -0.02em;
}
}
.creator-man {
  display: flex;
  gap: 65px;
  margin-top: 11px;

&__block {
  display: flex;
}

&__img {
  border-radius: 50%;
}

&__block-text {
  margin-left: 8px;
}

&__text {
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #777E91;
}

&__nickname {
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #23262F;
}
}


.creator-current-bid {
  margin-top: 40px;
  width: 352px;
  height: 296px;
  border: 2px solid #E6E8EC;
  box-shadow: 0px 64px 64px -48px rgba(31, 47, 70, 0.12);
  border-radius: 24px;
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;

&__text {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin-top: 24px;
}

&__price-eth {
  margin: 0;
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -0.02em;
}

&__price-dolar {
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #777E91;
}

&__block-time {
  display: flex;
  gap: 19px;
}

&__auction-ending {
  width: 64px;
  height: 64px;
  display: flex;
  flex-direction: column;
  margin-top: 8px;
}

&__time {
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
}

&__time-text {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #777E91;
}
}


.creator-button {

&__place-bid {
  margin-top: 40px;
  width: 352px;
  height: 48px;
  background: #3772FF;
  border-radius: 90px;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #FCFCFD;
  border: none;
  transition: transform .3s, box-shadow .3s;
  cursor: pointer;
}

&__place-bid:hover {
  transform: scale(1.02);
  box-shadow: 5px 5px 5px #777E91;
}

&__view-item {
  margin-top: 10px;
  width: 352px;
  height: 48px;
  border-radius: 90px;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  border: 2px solid rgba(22%, 45%, 100%, 0.25);
  transition: transform .3s, box-shadow .3s;
  cursor: pointer;
}

&__view-item:hover {
  transform: scale(1.02);
  box-shadow: 5px 5px 5px #777E91;
}
}

`

export default styledCreatorNetwork