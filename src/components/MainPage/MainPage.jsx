import PopularSellers from "../PopularSellers/PopularSellers.jsx";
import EconomyBlock from '../EconomyBlock/EconomyBlock.jsx'
import EarnFreeCrypto from "../EarnFreeCrypto/EarnFreeCrypto.jsx";
import CreatorNetwork from '../CreatorNetwork/CreatorNetwork'

const MainPage = () => {
    return(
        <div>
            {/* Здесь контент главной страницы */}
            <CreatorNetwork/>
            <EconomyBlock/>
            <PopularSellers/>
            <EarnFreeCrypto/>
        </div>
    )
}

export default MainPage;