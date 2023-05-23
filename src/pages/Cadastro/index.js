import FormCadastro from 'components/ComponentsCadastro/FormCadastro';
import Titulo from 'components/Titulo';
import styles from './Cadastro.module.css';

function Cadastro(){
    return(
        <div className={styles.container}>
            <section className={styles.cards}>
                <Titulo>
                    <h1>CADASTRO</h1>
                </Titulo>
                <FormCadastro />
            </section>
        </div>
    )
}

export default Cadastro;