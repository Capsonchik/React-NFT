import { PopularSellersBlock } from "./PopularSellers.styled.js";
import { Container } from "../GlobalStyle/Styled.Global";
import PrevArrow from './Images/PrevArrow.png'
import NextArrow from './Images/NextArrov.png'
import Sellers from "./Sellers/Sellers.jsx";
import { useState } from "react";
import SellersSortBlock from "./SellersSort/SellersSortBlock.jsx";


const PopularSellers = () => {

const [offset, setOffset] = useState(232)

    const swipeSlideRight  = () => {        
        const sliderBlock = document.querySelector('.slider-wrapper')
        setOffset(offset + 232)
        sliderBlock.style.left = -offset +  'px'
        if(offset > 695) {
            setOffset(0)
        }
    }

    const swipeSlideLeft  = () => {        
        const sliderBlock = document.querySelector('.slider-wrapper')
        setOffset(offset - 232)
        sliderBlock.style.left = offset +  'px'
        if(offset < -695) {
            setOffset(0)
        }
    }
    
    return ( 
        <PopularSellersBlock>
            <div className='section-wrapper'>
                <Container>
                    <div className='popular-sellers__header'>
                        <SellersSortBlock/>
                    </div>
                    <div className='popular-sellers__slider'>
                        <div onClick={swipeSlideLeft} className='arrow prev-arrow'>
                            <img src={PrevArrow} alt="prev-arrov" />
                        </div>
                        <div className='popular-sellers__slider-block'>
                            <div className='slider-wrapper'>
                            <Sellers/>
                            </div>
                            
                        </div>
                        <div onClick={swipeSlideRight} className='arrow next-arrow'>
                            <img src={PrevArrow} alt="prev-arrov" />
                            {/* <img src={NextArrow} alt="next-arrov" /> */}
                        </div>
                    </div>                                           
                </Container>
            </div>
        </PopularSellersBlock>
     )
}
 
export default PopularSellers;