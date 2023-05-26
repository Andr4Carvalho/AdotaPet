import Titulo from 'components/Titulo';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Entrar.module.css';
import { useRef, useState } from 'react';
import useAuth from 'hooks/useAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Entrar(){
    const {signin} = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const refInputEmail = useRef();
    const refInputSenha = useRef();
    
    const regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regSenha = /^(?=.*\d)(?=.*[.!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    const notifyError = (Mensagem) => toast.error(Mensagem, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });

    const focusError = (campo) => {
        campo.current.focus();
        campo.current.style.border = "2px solid red";
    }

    const handleLogin = () => {
        if(!email | !senha){
            if(!senha) focusError(refInputSenha);
            if(!email) focusError(refInputEmail);
            notifyError("Preencha todos os campos");
            setError("Preencha todos os campos");
            return;
        }

        if(!regEmail.test(email) || email.length < 10){
            setError("Informe um email válido!");
            notifyError("Informe um email válido!");
            return;
        }

        if(!regSenha.test(senha)){
            setError("Informe uma senha válida!");
            notifyError("Informe uma senha válida!");
            return;
        }

        const res = signin(email, senha);
        if(res){
            notifyError(res);
            setError(res);
            return;
        }

        navigate("/")
    }

    return(
        <div className={styles.container}>
            <ToastContainer 
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"/>
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
                        onChange={(e) => [setEmail(e.target.value), setError(""), refInputEmail.current.style.border = "1px solid white"]}
                        ref={refInputEmail}
                    />
                </div>
                <div className={styles.divLinha}>
                    <input
                        type="password"
                        placeholder='Digite sua Senha'
                        className={styles.input}
                        value={senha}
                        onChange={(e) => [setSenha(e.target.value), setError(""), refInputSenha.current.style.border = "1px solid white"]}
                        ref={refInputSenha}
                    />
                    <div className={styles.tooltip}>?
                        <span className={styles.tooltiptext}>
                            Sua senha deve conter no mínimo 8 caracteres, um letra maiúscula, um número e um símbolo.
                        </span>
                    </div>
                </div>
                <div>
                    <Link className={styles.link}>
                        Recuperar senha
                    </Link>
                </div>
                <div>
                    <button onClick={handleLogin} className={styles.btnEntrar}>Entrar</button>
                </div>
                <span className={styles.msgErro}>{error}</span>
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