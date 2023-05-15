import Titulo from 'components/Titulo';
import styles from './Cadastro.module.css';

function Cadastro(){
    return(
        <div className={styles.container}>
            <section className={styles.cards}>
                <Titulo>
                    <h2>CADASTRO</h2>
                </Titulo>
            </section>
        </div>
    )
}

export default Cadastro;