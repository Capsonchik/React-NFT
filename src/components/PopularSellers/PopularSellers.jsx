import { PopularSellersBlock } from "./PopularSellers.styled.js";
import { Container } from "../GlobalStyle/Styled.Global";

const PopularSellers = () => {
    return ( 
        <PopularSellersBlock>
            <div className='section-wrapper'>
                <Container>
                    <div className='popularSellers__header'>

                    </div>
                    <div className='popularSellers__slider'>
                        <div className='prev-arrow'></div>
                        <div className='next-arrow'></div>
                    </div>                                           
                </Container>
            </div>
        </PopularSellersBlock>
     )
}
 
export default PopularSellers;