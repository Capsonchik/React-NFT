import PopularSellers from "../PopularSellers/PopularSellers.jsx";
import EconomyBlock from '../EconomyBlock/EconomyBlock.jsx'
import EarnFreeCrypto from "../EarnFreeCrypto/EarnFreeCrypto.jsx";
import HotBid from "../HotBid/hotBid.jsx";
import HotCollection from "../HotCollections/hotCollection.jsx";

const MainPage = () => {
    return(
        <div>
            {/* Здесь контент главной страницы */}
            <EconomyBlock/>
            <PopularSellers/>
            <HotBid/>
            <HotCollection/>
            <EarnFreeCrypto/>
        </div>
    )
}

export default MainPage;