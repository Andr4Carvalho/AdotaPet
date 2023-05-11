import styles from './CardsRodape.module.css';

function CardRodape({nome, logo}){
    return (
        <div className={styles.container}>
            <img src={logo} alt={nome} className={styles.capa} />
        </div>
    )
}

export default CardRodape;