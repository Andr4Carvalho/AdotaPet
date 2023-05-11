import { Link } from 'react-router-dom';
import styles from './CardsNoticias.module.css';

function CardNoticias({titulo, imagem, data, categoria, link}){
    return (
        <Link className={styles.link} to={link} target="_blank">
            <div className={styles.container}>
                <img src={imagem} alt={titulo} className={styles.imagem} />
                <div className={styles.divNoticia}>
                    <span className={styles.titulo}>{titulo}</span>
                    <span className={styles.data}>{data}</span>
                    <span className={styles.categoria}>{categoria}</span>
                </div>
            </div>
        </Link>
    )
}

export default CardNoticias;