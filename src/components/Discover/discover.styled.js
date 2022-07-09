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
`