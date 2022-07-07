import PopularSellers from "../PopularSellers/PopularSellers.jsx";
import EconomyBlock from '../EconomyBlock/EconomyBlock.jsx'
import EarnFreeCrypto from "../EarnFreeCrypto/EarnFreeCrypto.jsx";

const MainPage = () => {
    return(
        <div>
            {/* Здесь контент главной страницы */}
            <EconomyBlock/>
            <PopularSellers/>
            <EarnFreeCrypto/>
        </div>
    )
}

export default MainPage;