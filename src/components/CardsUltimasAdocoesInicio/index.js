import styles from './CardsUltimasAdocoesInicio.module.css'

function CardUltimasAdocoesInicio({nome, imagem}){
    return (
        <div className={styles.container}>
            <img src={imagem} alt={nome} className={styles.capa} />
        </div>
    )
}

export default CardUltimasAdocoesInicio;