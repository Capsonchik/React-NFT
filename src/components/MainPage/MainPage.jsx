import PopularSellers from "../PopularSellers/PopularSellers.jsx";
import EconomyBlock from '../EconomyBlock/EconomyBlock.jsx'
import EarnFreeCrypto from "../EarnFreeCrypto/EarnFreeCrypto.jsx";
import HotBid from "../HotBid/hotBid.jsx";

const MainPage = () => {
    return(
        <div>
            {/* Здесь контент главной страницы */}
            <EconomyBlock/>
            <PopularSellers/>
            <HotBid/>
            <EarnFreeCrypto/>
        </div>
    )
}

export default MainPage;