import PopularSellers from "../PopularSellers/PopularSellers.jsx";
import EconomyBlock from '../EconomyBlock/EconomyBlock.jsx'
import EarnFreeCrypto from "../EarnFreeCrypto/EarnFreeCrypto.jsx";
import CreatorNetwork from '../CreatorNetwork/CreatorNetwork'
import HotBid from "../HotBid/hotBid.jsx";
import HotCollection from "../HotCollections/hotCollection.jsx";
import Discover from "../Discover/discover.jsx";

const MainPage = () => {
    return(
        <div>
            {/* Здесь контент главной страницы */}
            <EconomyBlock/>
            <CreatorNetwork/>
            <PopularSellers/>
            <HotBid/>
            <HotCollection/>
            <Discover/>
            <EarnFreeCrypto/>
        </div>
    )
}

export default MainPage;