import { Link } from 'react-router-dom';
import { Container } from '../../components/GlobalStyles/Global.styled';
import { StyledNotFound } from './notFoundPage.styled.js';
import img from './img/not-found-e12fa988.png'



export const NotFoundPage = () => {
    return(
        <StyledNotFound>
            <Container>
                <div className='notFoundPage'>
                    <h1 className='notFoundPage__title'>You got lost</h1>
                    <p className='notFoundPage__subtitle'>It seems that we can't find the page you are looking for</p>
                    <Link className='notFoundPage__home' to='/'>GO TO HOMEPAGE</Link>
                    <img className='notFoundPage__img' src={img} alt="" />
                
                
                    
                </div>  
            </Container>  
        </StyledNotFound>
    )
}
