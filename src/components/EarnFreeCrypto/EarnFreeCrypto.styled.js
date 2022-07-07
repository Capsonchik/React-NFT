import styled from "styled-components";

export const EarnFreeCryptoStyled = styled.div`
    border-bottom: 2px solid #E6E8EC;

    & p {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 16px;
        color: #777E91;
    }

    & h2 {
        font-weight: 700;
        font-size: 64px;
        color: #23262F;
        letter-spacing: -0.02em;
        line-height: 64px;
    }

    & img {
        width: 640px;
        height: 640px;
    }

    .description {
        margin-top: 20px;
        font-weight: 400;
        font-size: 16px;
        color: #777E91;
        text-transform: none;
    }

    .earn-free-crypto-wraper {
        padding-top: 80px;
        padding-bottom: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .buttons {
        margin-top: 40px;
    }

    .earn {
        margin-right: 16px;
        width: 30%;
        padding-top: 16px;
        padding-bottom: 16px;
        background: #3772FF;
        border-radius: 90px;
        border: 0;
        font-weight: 700;
        font-size: 16px;
        color: #FCFCFD;
        cursor: pointer;
    }

    .discover {
        width: 45%;
        padding-top: 14px;
        padding-bottom: 14px;
        border: 0;
        border-radius: 90px;
        border: 2px solid #E6E8EC;
        background-color: inherit;
        font-weight: 700;
        font-size: 16px;
        color: #23262F;
        cursor: pointer;
    }

`