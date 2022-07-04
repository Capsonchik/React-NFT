import s from './EconomyBlock.module.css'

const EconomyBlock = () => {
    return(
        <section className={s.EconomyBlock}>
            <div className={s.container}>
                <p>Create, explore, & collect digital art NFTs.</p>
                <h2>The new creative economy.</h2>
                <button className={s.EconomyButton}>Start your search</button>
            </div>
        </section>
    )
}

export default EconomyBlock;