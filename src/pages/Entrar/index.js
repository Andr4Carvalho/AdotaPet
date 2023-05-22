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
                    <div className={styles.divLinha}>
                        <input
                            type="text"
                            name="nome"
                            placeholder="Nome"
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.divLinha}>
                        <input
                            type="password"
                            name="Senha"
                            placeholder='Senha'
                            className={styles.input}
                        />
                        <div className={styles.tooltip}>?
                            <span className={styles.tooltiptext}>
                                Sua senha deve ter no mínimo 8 caracteres e incluir uma combinação de letras maiúsculas e minúsculas, números e caracteres especiais.
                            </span>
                        </div>
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