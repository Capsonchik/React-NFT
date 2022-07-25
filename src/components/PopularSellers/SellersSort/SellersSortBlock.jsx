import { SellersSortBlockStyled } from "./SellersSortBlock.styled";
import PopularSellersArrow from '../Images/PopularSellersArrow.png'
import TodayArrow from '../Images/TodayArrow.png'

const SellersSortBlock = () => {
    const clickToOpen = () => {
        const sellersOpenBlock = document.querySelector('.popular-sellers__open')
        const sellersClickBlock = document.querySelector('.popular-sellers__date-sort')
        sellersClickBlock.classList.toggle('block-open')
        sellersOpenBlock.classList.toggle('active')
    }

    

    return ( 
        <SellersSortBlockStyled>
            <div className='sellers-sort-wraper'>
                <div>
                    <h2>Popular</h2>
                    <div className='sellers-sort-left-block'>
                        <span>Sellers</span>
                        <img src={PopularSellersArrow} alt="arrow" />
                    </div>
                </div>
                <div className="popular-sellers__open-block">
                <div onClick={clickToOpen} className='popular-sellers__date-sort'>
                    <span>Today</span>
                    <img src={TodayArrow} alt="arrow"/>
                </div>
                <div className="popular-sellers__open">
                    <span>Date Sort</span>
                    <span>Sellers Sort</span>
                    <span>Price Sort</span>
                </div>
                </div>
            </div>
        </SellersSortBlockStyled>
     );
}
 
export default SellersSortBlock;