import { PopularSellersBlock } from "./PopularSellers.styled.js";
import { Container } from "../GlobalStyle/Styled.Global";
import PrevArrow from './Images/PrevArrow.png'
import NextArrow from './Images/NextArrov.png'
import Sellers from "./Sellers/Sellers.jsx";


const PopularSellers = () => {
    return ( 
        <PopularSellersBlock>
            <div className='section-wrapper'>
                <Container>
                    <div className='popular-sellers__header'>

                    </div>
                    <div className='popular-sellers__slider'>
                        <div className='prev-arrow'>
                            <img src={PrevArrow} alt="prev-arrov" />
                        </div>
                        <div className='popular-sellers__slider-block'>
                            <Sellers/>
                        </div>
                        <div className='next-arrow'>
                            <img src={NextArrow} alt="next-arrov" />
                        </div>
                    </div>                                           
                </Container>
            </div>
        </PopularSellersBlock>
     )
}
 
export default PopularSellers;