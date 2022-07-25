import {Cards} from '../../State/Cards'
import Card from '../../Card/card'
import { StyledCollectionProduct } from './collectionProduct.styled'
import {  ContainerFlex } from '../../GlobalStyles/Global.styled'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export const CollectionCardCollectibles= () => {
const params = useParams()
console.log(params)


const name = Cards.map((el, i) => {
    for(; i < 2;){
       
        return (
            <div key={el.id} className="card">
                <Card data={el}/>
            </div>
        )
    }
})



    return(
        <StyledCollectionProduct>
            <ContainerFlex>
                <div className='cards-flex'>{name}</div>
            </ContainerFlex>
            
        </StyledCollectionProduct>
        
        )
}