import useAuth from 'hooks/useAuth';
import styles from './CabecalhoUsuario.module.css';
import { useNavigate } from 'react-router-dom';

function CabecalhoUsuario(){
    const {signout} = useAuth();
    const navigate = useNavigate();

    return (
        <div className={styles.dropdown}>
            <button className={styles.botao}>
                <span className={styles.marginIcon}>André Carvalho</span>
                <i class="fa-solid fa-caret-down"></i>
            </button>
            <div className={styles.dropdownContent}>
                <button className={styles.botao} onClick={() => [
                    signout(), navigate("/")
                ]}>
                    <i class="fa-solid fa-right-from-bracket" />
                    <span className={styles.marginIcon}>Sair</span>
                </button>
            </div>
        </div>
    )
}

export default CabecalhoUsuario;