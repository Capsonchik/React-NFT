import PopularSellers from "../PopularSellers/PopularSellers.jsx";
import EconomyBlock from '../EconomyBlock/EconomyBlock.jsx'

const MainPage = () => {
    return(
        <div>
            {/* Здесь контент главной страницы */}
            <PopularSellers/>
            <EconomyBlock/>
        </div>
    )
}

export default MainPage;