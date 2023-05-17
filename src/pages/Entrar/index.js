import Titulo from 'components/Titulo';
import { Link } from 'react-router-dom';
import styles from './Entrar.module.css';

function Entrar(){
    return(
        <div className={styles.container}>
            <section className={styles.cards}>
                <Titulo>
                    <h2>ENTRAR</h2>
                </Titulo>
                <form>
                    <div>
                        <input
                            type="text"
                            name="nome"
                            placeholder="Nome"
                            className={styles.input}
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            name="Senha"
                            placeholder='Senha'
                            className={styles.input}
                        />
                    </div>
                    <div>
                        <Link className={styles.link}>
                            Recuperar senha
                        </Link>
                    </div>
                    <div>
                        <button type="submit" className={styles.btnEntrar}>Entrar</button>
                    </div>
                </form>
                <Titulo>
                    <h2>Não tem uma conta?</h2>
                </Titulo>
                <Link className={styles.link} to={'/Cadastro'}>
                    Cadastre-se
                </Link>
            </section>
        </div>
    )
}

export default Entrar;