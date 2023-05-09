import { Link } from 'react-router-dom';
import styles from './CabecalhoBotao.module.css';

function CabecalhoBotao({url, children}){
    return (
        <Link to={url} className={styles.botao}>
            {children}
        </Link>
    )
}

export default CabecalhoBotao;