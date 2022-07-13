import styled from 'styled-components'

export const Container = styled.div`
    margin: 0 auto;
    max-width: 1120px;
`

export const ContainerFlex = styled(Container)`
    display: flex;

`

export const ContainerFlexColumn = styled(Container)`
    display: flex;
    flex-direction: column;
`


export const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  
`
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

`

export const FlexBox = styled(Flex)`
justify-content: space-between;
`