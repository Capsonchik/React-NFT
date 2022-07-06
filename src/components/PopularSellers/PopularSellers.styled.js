import styled from "styled-components";

export const PopularSellersBlock = styled.section`
    .section-wrapper {
        padding-top: 128px;
        padding-bottom: 128px;
        background: #F4F5F6;
    }
    .popular-sellers__slider {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .popular-sellers__slider-block {
        display: flex;
        width: 100%;
        overflow: hidden;
    }

    .slider-wrapper {
        position: relative;
        left: 0;
        transition: all ease 1s;
    }

    .arrow {
        width: 5%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .next-arrow img {
        transform: rotate(180deg);
    }

    .popular-sellers__header {
        padding-left: 5%;
        padding-right: 5%;
        padding-bottom: 64px;
    }

`