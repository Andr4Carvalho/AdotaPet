import styles from './CardsAnimaisDisponiveis.module.css'

function CardsAnimaisDisponiveis({nome, imagem, sexo, peso, idade, localizacao}){
    return (
        <div className={styles.container}>
            <img src={imagem} alt={nome} className={styles.capa} />
            <div className={styles.divInfos}>
                <span className={styles.nomeAnimal}>{nome}</span><br />
                {sexo}, {peso}, {idade} <br />
                {localizacao}
                <button className={styles.button}>Quero Adotar</button>
            </div>
        </div>
    )
}

export default CardsAnimaisDisponiveis;