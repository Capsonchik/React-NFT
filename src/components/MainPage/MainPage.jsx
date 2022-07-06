import PopularSellers from "../PopularSellers/PopularSellers.jsx";
import EconomyBlock from '../EconomyBlock/EconomyBlock.jsx'

const MainPage = () => {
    return(
        <div>
            {/* Здесь контент главной страницы */}
            <EconomyBlock/>
            <PopularSellers/>
        </div>
    )
}

export default MainPage;