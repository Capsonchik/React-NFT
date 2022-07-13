import styled from "styled-components";


export const Button = styled.button`
    padding: 12px 16px;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    border: 2px solid #777E91;
    border-radius: 90px;
    font-family: 'DM Sans';	
    background: transparent;
    color: white;
    cursor: pointer;

    transition: 1s linear;

    :hover {
        color: #fff;
        background: #3059c7;
        border: 2px solid transparent;
    
    }


    .button-text {
        padding-right: 3px;
    }
`

export const EditButton = styled(Button)`
    margin-left: 17px;`