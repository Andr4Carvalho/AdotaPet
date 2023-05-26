import Titulo from 'components/Titulo';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Entrar.module.css';
import { useState } from 'react';
import useAuth from 'hooks/useAuth';

function Entrar(){
    const {signin} = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if(!email | !senha){
            setError("Preencha todos os campos");
            return;
        }

        const res = signin(email, senha);
        if(res){
            setError(res);
            return;
        }

        navigate("/")
    }

    return(
        <div className={styles.container}>
            <section className={styles.cards}>
                <Titulo>
                    <h2>ENTRAR</h2>
                </Titulo>
                <div className={styles.divLinha}>
                    <input
                        type="email"
                        placeholder="Digite seu Email"
                        className={styles.input}
                        value={email}
                        onChange={(e) => [setEmail(e.target.value), setError("")]}
                    />
                </div>
                <div className={styles.divLinha}>
                    <input
                        type="password"
                        placeholder='Digite sua Senha'
                        className={styles.input}
                        value={senha}
                        onChange={(e) => [setSenha(e.target.value), setError("")]}
                    />
                    <div className={styles.tooltip}>?
                        <span className={styles.tooltiptext}>
                            Sua senha deve conter no mínimo 8 caracteres, um letra maiúscula, um número e um símbolo.
                        </span>
                    </div>
                </div>
                <span>{error}</span>
                <div>
                    <Link className={styles.link}>
                        Recuperar senha
                    </Link>
                </div>
                <div>
                    <button onClick={handleLogin} className={styles.btnEntrar}>Entrar</button>
                </div>
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