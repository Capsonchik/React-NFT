import styled from "styled-components";



export const StyledNotFound = styled.div`
    .notFoundPage {
        display: flex;
        flex-direction: column;
        align-items: center; 
        padding: 48px 0 150px 0;


        &__title {
            font-size: 60px;
            color: #4d4e4f;
            padding-bottom: 25px;
        }

        &__subtitle{
            width: 336px;
            text-align: center;
            font-size: 19px;
            color: #5f6061;
        }

        &__home {
            text-decoration: none;
            color: #0ea3fa;
            padding-top: 16px;

            :hover {
                color: red;
            }
        }

        &__img {
            width: 910px;
            height: 606px;
        }
    }


    .styledLinkName {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    `


export const Button = styled.button`
    background-color: ${props => props.primary ? "rgb(171,140,245)  " : "orange"};
    color: ${props => props.primary ? "orange" : "#561db3"};
    
    border: none;
    padding: 13px;
    border-radius: 29px;
    margin: 10px;

    &:hover {
        color: green;
        background-color: rgb(214 177 249);
        cursor: pointer;
    }
`



