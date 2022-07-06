import { SellersSortBlockStyled } from "./SellersSortBlock.styled";
import PopularSellersArrow from '../Images/PopularSellersArrow.png'
import TodayArrow from '../Images/TodayArrow.png'

const SellersSortBlock = () => {
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
                <div className='popular-sellers__date-sort'>
                    <span>Today</span>
                    <img src={TodayArrow} alt="arrow"/>
                </div>
            </div>
        </SellersSortBlockStyled>
     );
}
 
export default SellersSortBlock;