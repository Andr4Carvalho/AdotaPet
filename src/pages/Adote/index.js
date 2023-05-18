import Titulo from 'components/Titulo';
import styles from './Adote.module.css';

function Adote(){
    return(
        <div className={styles.linha}>
            <div className={styles.divSidebar}>
                <Titulo>
                    <h2 className={styles.titulo}>FILTRO_AQUI</h2>
                </Titulo>
            </div>
            <div className={styles.divAnimais}>
                <Titulo>
                    <h2 className={styles.titulo}>Animais disponíveis</h2>
                </Titulo>
            </div>
        </div>
    )
}

export default Adote;