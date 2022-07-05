import { StyledEconomyBlock, FlexBoxColumn } from "./EconomyBlock.styled";
import { FlexBox, Container } from "../GlobalStyle/Styled.Global";

const EconomyBlock = () => {
    return(
        <StyledEconomyBlock>
            <section className='economy-block'>
                <Container>
                    <FlexBoxColumn>
                        <p>Create, explore, & collect digital art NFTs.</p>
                        <h2>The new creative economy.</h2>
                        <button className='economy-button'>Start your search</button>
                    </FlexBoxColumn>
                </Container>
                {/* <div className='container'>
                    <p>Create, explore, & collect digital art NFTs.</p>
                    <h2>The new creative economy.</h2>
                    <button className='economy-button'>Start your search</button>
                </div> */}
            </section>
        </StyledEconomyBlock>   
    )
}

export default EconomyBlock;