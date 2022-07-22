import styled from "styled-components";
import {BtnCard} from '../../../ProfilePage/cardProfile/CardInfo.styled'


export const StyledNotificationModal = styled.div`
.block {
    /* background: green;
    border-radius: 10px; */
    position: relative;
    color: #fff;
   }
   .block::after {
    content: '';
    position: absolute;
    color: green;
    display: block;
    height: 20px;
    width: 20px;
    background-color: inherit;
    border: inherit;
    position: absolute;
    top: -9px;

    left: calc(50% - 10px);
    -webkit-clip-path: polygon(0% 0%,100% 100%,0% 100%);
    clip-path: polygon(0% 0%,100% 100%,0% 100%);
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(135deg);
    border-radius: 0 0 0 0.35em;
   }


    .modal-popup-active {
        opacity: 1;
        display: block;
        width: 396px;
        height: 502px;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        box-shadow: 0px 16px 64px -48px rgba(31, 47, 70, 0.4);
        border-radius: 24px;
        padding: 40px 32px 0 32px;
        z-index: 2;
        position: absolute;
        right: -184px;
        top: 98px;
        transition: 0.8s ease;
    }

    .modal-popup{
        display: none;
        opacity: 0;
        transition: 0.5s ease;
    }

    .header-modal {
      padding-bottom: 16px;

        & span {
            font-weight: 700;
            font-size: 32px;
            line-height: 40px;
            color: #23262F;
            letter-spacing: -0.01em;
        }
    }

    .info-card {
        display: flex;
        width: 200px;
        justify-content: space-between;
        
    }

    .products-card {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 335px;
        padding: 13px 0;
    }

    .img {
        width: 64px;
        height: 64px;
    }

    .modal-title {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #141416;
    }

    .modal-subtitle {
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: #353945;
    }

    span {
            font-weight: 400;
            font-size: 12px;
            line-height: 20px;
            color: #777E91;
        }
    

`

export const BtnModal = styled(BtnCard)`
    margin-left: 77px;
`
