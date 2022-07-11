import styled from "styled-components";

export const DiscoverStyled = styled.section`
    padding-top: 128px;
    padding-bottom: 128px;

    .discover-nav-block {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #E6E8EC;
        padding-bottom: 32px;
    }

    .discover-nav-block__added {
        width: 20%;
        height: 46px;
        border: 2px solid #E6E8EC;
        border-radius: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px;

        & img {
            width: 32px;
            height: 32px;
        }

        & span {
            font-weight: 500;
            font-size: 14px;
            color: #23262F;
        } 
    }

    .nav-link-active {
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        color: white;
        padding: 6px 12px;
        background-color: #fff;
        background: #353945;
        border-radius: 100px;
        text-decoration: none;
        margin-right: 24px;
        cursor: pointer;
    }

    .nav-link {
        text-decoration: none;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        color: #777E91;
        padding: 6px 12px;
        margin: 0 24px 0 0;
        cursor: pointer;
  }

  .discover-nav-block__btn {
    width: 13%;
    height: 48px;
    border-radius: 90px;
    background: #3772FF;
    border: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 24px;
    padding-right: 24px;
    font-weight: 700;
    font-size: 16px;
    color: #FCFCFD;
  }

  .discover-sort-block {
    margin-top: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .discover-sort-block__item {
    width: 23%;
    height: 48px;
    border: 2px solid #E6E8EC;
    border-radius: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 16px;
    padding-right: 8px;

    & img {
        width: 32px;
        height: 32px;
    }
  }

  .discover-cards-block {
    margin-top: 32px;
  }
  
  .discover-card {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

`