import {CardProfile } from './cardProfile/CardProfile'
import { Navigation } from './navigatoin/Navigation'
import { StyledProfilePage } from "./ProfilePage.styled"
import {ContainerFlex, ContainerFlexColumn} from '../GlobalStyles/Global.styled'
import { SectionSlider } from "./sectionSlider/SectionSlider"
import { CollectionCardOnSale } from './collectionProduct/collectionCardOnSale'
import { CollectionCardCollectibles } from './collectionProduct/collectionCardCollectibles'




export const ProfilePage = () => {
    return(
        <StyledProfilePage>
           <SectionSlider />
            <ContainerFlex>
                <CardProfile />
                <ContainerFlexColumn>
                    <Navigation />
                    <CollectionCardOnSale/>
                </ContainerFlexColumn>
         
            </ContainerFlex> 
        </StyledProfilePage>
    )
}