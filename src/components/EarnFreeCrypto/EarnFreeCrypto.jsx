import { EarnFreeCryptoStyled } from "./EarnFreeCrypto.styled";
import { Container } from "../GlobalStyle/Styled.Global";
import EarnImg from './EarnFreeCrypto.png'

const EarnFreeCrypto = () => {
    return ( 
        <EarnFreeCryptoStyled>
            <Container>
                <div className='earn-free-crypto-wraper'>
                    <div className='earn-free-crypto__header'>
                        <p>Save your time with Stacks</p>
                        <h2>Earn free crypto with Crypter</h2>
                        <p className='description'>A creative agency that lead and inspire</p>
                        <div className='buttons'>
                            <button className='earn'>Earn now</button>
                            <button className='discover'>Discover more</button>
                        </div>
                    </div>
                    <img src={EarnImg} alt="earn-free-crypto" />
                </div>
            </Container>
        </EarnFreeCryptoStyled>
     );
}
 
export default EarnFreeCrypto;