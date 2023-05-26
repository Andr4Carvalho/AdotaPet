import Titulo from 'components/Titulo';
import styles from './Cadastro.module.css';
import { IMaskInput } from 'react-imask';
import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cadastro(){
    const [nome, setNome] = useState("");
    const refInputNome = useRef();
    const [email, setEmail] = useState("");
    const refInputEmail = useRef();
    const [senha, setSenha] = useState("");
    const refInputSenha = useRef();
    const refSpanSenha = useRef();
    const [cpf, setCpf] = useState("");
    const [erroCpf, setErroCpf] = useState(false);
    const [rg, setRg] = useState("");
    const refInputRG = useRef();
    const [dtNasc, setDtNasc] = useState("");
    const refInputDtNasc = useRef();
    const [sexo, setSexo] = useState();
    const refInputSexo = useRef();
    const [logradouro, setLogradouro] = useState("");
    const refInputLogradouro = useRef();
    const [numero, setNumero] = useState("");
    const refInputNumero = useRef();
    const [bairro, setBairro] = useState("");
    const refInputBairro = useRef();
    const [complemento, setComplemento] = useState("");
    const refInputComplemento = useRef();
    const [cidade, setCidade] = useState("");
    const refInputCidade = useRef();
    const [estado, setEstado] = useState("");
    const refInputEstado = useRef();
    const [cep, setCep] = useState("");
    const refInputCep = useRef();

    const [error, setError] = useState("");
    const navigate = useNavigate();
    const {signup} = useAuth();
    const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
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

    function validarCPF(cpf) {
        let erro = { valido: true, texto: "" };
        if (cpf.length < 14) {
            return { valido: false, texto: "CPF deve ter 11 dígitos." };
        } else {
            let cpfv = cpf;
            let i;

            if (cpfv.length === 14 || cpfv.length === 11) {
                cpfv = cpfv.replace(".", "");
                cpfv = cpfv.replace(".", "");
                cpfv = cpfv.replace("-", "");
                var nonNumbers = /\D/;
                if (nonNumbers.test(cpfv)) {
                    erro = {
                        valido: false,
                        texto: "O CPF é composto apenas por números!",
                    };
                } else {
                    if (
                        cpfv === "00000000000" ||
                        cpfv === "11111111111" ||
                        cpfv === "22222222222" ||
                        cpfv === "33333333333" ||
                        cpfv === "44444444444" ||
                        cpfv === "55555555555" ||
                        cpfv === "66666666666" ||
                        cpfv === "77777777777" ||
                        cpfv === "88888888888" ||
                        cpfv === "99999999999"
                    ) {
                        erro = { valido: false, texto: "Número de CPF inválido." };
                    }
                    var Soma;
                    var Resto;
                    Soma = 0;
                    for (i = 1; i <= 9; i++) Soma = Soma + parseInt(cpfv.substring(i - 1, i)) * (11 - i);
                    Resto = (Soma * 10) % 11;

                    if ((Resto === 10) || (Resto === 11)) Resto = 0;
                    if (Resto !== parseInt(cpfv.substring(9, 10))) return erro = { valido: false, texto: "Número de CPF inválido." };

                    Soma = 0;
                    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(cpfv.substring(i - 1, i)) * (12 - i);
                    Resto = (Soma * 10) % 11;

                    if ((Resto === 10) || (Resto === 11)) Resto = 0;
                    if (Resto !== parseInt(cpfv.substring(10, 11))) return erro = { valido: false, texto: "Número de CPF inválido." };

                    erro = { valido: true, texto: "CPF Válido" };
                }
            } else {
                if (cpfv.length === 0) {
                    erro = { valido: false, texto: "Informe o CPF." };
                } else {
                    erro = { valido: false, texto: "Número de CPF inválido." };
                }
            }
        }
        return erro;
    }

    const handleSignup = () => {
        if (!email | !senha | !nome | !cpf | !rg | !dtNasc | !logradouro | !numero | !bairro | !complemento | !cidade | estado === "" | !cep | !sexo) {
            if(!cep) focusError(refInputCep);
            if(estado === "") focusError(refInputEstado);
            if(!cidade) focusError(refInputCidade);
            if(!complemento) focusError(refInputComplemento);
            if(!bairro) focusError(refInputBairro);
            if(!numero) focusError(refInputNumero);
            if(!logradouro) focusError(refInputLogradouro);
            if(!sexo) focusError(refInputSexo);
            if(!dtNasc) focusError(refInputDtNasc);
            if(!rg) focusError(refInputRG);
            if(!cpf) setErroCpf(true);
            if(!senha) focusError(refInputSenha);
            if(!email) focusError(refInputEmail);
            if(!nome) focusError(refInputNome);
            setError("Preencha todos os campos!");
            notifyError("Preencha todos os campos!");
            return;
        }

        if(!regName.test(nome) || nome.length < 6){
            setError("Digite seu nome e sobrenome usando apenas letras!");
            notifyError("Digite seu nome e sobrenome usando apenas letras!");
            focusError(refInputNome);
            return;
        }

        if(!regEmail.test(email) || email.length < 10){
            setError("Informe um email válido!");
            notifyError("Informe um email válido!");
            focusError(refInputEmail);
            return;
        }

        if(!regSenha.test(senha)){
            setError("Informe uma senha válida!");
            notifyError("Informe uma senha válida!");
            focusError(refInputSenha);
            return;
        }
        
        if(!validarCPF(cpf).valido){
            setError("Informe um CPF válido!");
            notifyError("Informe um CPF válido!");
            return;
        }
    
        const res = signup(email, senha);
        if (res) {
          setError(res);
          notifyError(res);
          return;
        }
    
        alert("Usuário cadatrado com sucesso!");
        navigate("/");
      };

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
                    <h1>CADASTRO</h1>
                </Titulo>
                <Titulo>
                    <h3>Dados Pessoais</h3>
                </Titulo>
                <div className={styles.linhaForm}>
                    <input
                        type="text"
                        name="nome"
                        placeholder="Nome Completo"
                        className={styles.input}
                        value={nome}
                        onChange={(e) => [setNome(e.target.value), setError(""), refInputNome.current.style.border = "1px solid white"]}
                        ref={refInputNome}
                    />
                </div>
                <div className={styles.linhaForm}>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        className={styles.input}
                        value={email}
                        onChange={(e) => [setEmail(e.target.value), setError(""), refInputEmail.current.style.border = "1px solid white"]}
                        ref={refInputEmail}
                    />
                    <input
                        type="password"
                        name="senha"
                        placeholder="Senha"
                        className={styles.input}
                        value={senha}
                        onChange={(e) => [setSenha(e.target.value), setError(""), refInputSenha.current.style.border = "1px solid white"]}
                        onPointerEnter={(e) => refSpanSenha.current.style.visibility = "visible"}
                        onPointerLeave={(e) => refSpanSenha.current.style.visibility = "hidden"}
                        ref={refInputSenha}
                    />
                    <span ref={refSpanSenha} className={styles.tooltiptext}>
                        Sua senha deve conter no mínimo 8 caracteres, um letra maiúscula, um número e um símbolo.
                    </span>
                </div>
                <div className={styles.linhaForm}>
                    <IMaskInput
                        mask="000.000.000-00"
                        name="cpf"
                        placeholder="CPF"
                        className={!erroCpf ? styles.input : styles.inputErro}
                        value={cpf}
                        onAccept={(value) => [setCpf(value), setError("")]}
                    />
                    <input
                        type="number"
                        name="rg"
                        placeholder="RG"
                        className={styles.input}
                        value={rg}
                        onChange={(e) => [setRg(e.target.value), setError(""), refInputRG.current.style.border = "1px solid white"]}
                        ref={refInputRG}
                    />
                </div>
                <div className={styles.linhaForm}>
                    <div
                        className={styles.inputLabel}
                        onClick={() => {
                            document.getElementById("inputDtNasc").focus();
                        }}
                        ref={refInputDtNasc}
                    >
                        <span>Data de Nascimento: </span>
                        <input
                            type="date"
                            name="dataNasc"
                            placeholder="Data de Nascimento"
                            id="inputDtNasc"
                            className={styles.inputNascimento}
                            value={dtNasc}
                            onChange={(e) => [setDtNasc(e.target.value), setError(""), refInputDtNasc.current.style.border = "1px solid white"]}
                        />
                    </div>
                    <div className={styles.inputLabel} ref={refInputSexo}>
                        <span>Sexo: </span>
                        <label for="sexoMasc">
                            <input
                                type="radio"
                                name="sexo"
                                id="sexoMasc"
                                className={styles.inputRadio}
                                value={sexo}
                                onChange={(e) => [setSexo(e.target.value), setError("")]}
                            />
                            Masculino
                        </label>
                        <label for="sexoFem">
                            <input
                                type="radio"
                                name="sexo"
                                id="sexoFem"
                                className={styles.inputRadio}
                                value={!sexo}
                                onChange={(e) => [setSexo(!e.target.value), setError("")]}
                            />
                            Feminino
                        </label>
                    </div>
                </div>
                <Titulo>
                    <h3>Endereço</h3>
                </Titulo>
                <div className={styles.linhaForm}>
                    <input
                        type="text"
                        name="logradouro"
                        placeholder="Logradouro"
                        className={styles.input170}
                        value={logradouro}
                        onChange={(e) => [setLogradouro(e.target.value), setError(""), refInputLogradouro.current.style.border = "1px solid white"]}
                        ref={refInputLogradouro}
                    />
                    <input
                        type="number"
                        name="numero"
                        placeholder="Número"
                        className={styles.input}
                        value={numero}
                        onChange={(e) => [setNumero(e.target.value), setError(""), refInputNumero.current.style.border = "1px solid white"]}
                        ref={refInputNumero}
                    />
                </div>
                <div className={styles.linhaForm}>
                    <input
                        type="text"
                        name="bairro"
                        placeholder="Bairro"
                        className={styles.input}
                        value={bairro}
                        onChange={(e) => [setBairro(e.target.value), setError(""), refInputBairro.current.style.border = "1px solid white"]}
                        ref={refInputBairro}
                    />
                    <input
                        type="text"
                        name="complemento"
                        placeholder="Complemento"
                        className={styles.input}
                        value={complemento}
                        onChange={(e) => [setComplemento(e.target.value), setError(""), refInputComplemento.current.style.border = "1px solid white"]}
                        ref={refInputComplemento}
                    />
                </div>
                <div className={styles.linhaForm}>
                    <input
                        type="text"
                        name="cidade"
                        placeholder="Cidade"
                        className={styles.input}
                        value={cidade}
                        onChange={(e) => [setCidade(e.target.value), setError(""), refInputCidade.current.style.border = "1px solid white"]}
                        ref={refInputCidade}
                    />
                    <select 
                        id="estado" 
                        name="estado"
                        className={styles.input50}
                        value={estado}
                        onChange={(e) => [setEstado(e.target.value), setError(""), refInputEstado.current.style.border = "1px solid white"]}
                        ref={refInputEstado}
                        >
                        <option selected value="">Estado</option>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                        <option value="EX">Estrangeiro</option>
                    </select>
                    <input
                        type="number"
                        name="cep"
                        placeholder="CEP"
                        className={styles.input}
                        value={cep}
                        onChange={(e) => [setCep(e.target.value), setError(""), refInputCep.current.style.border = "1px solid white"]}
                        ref={refInputCep}
                    />
                </div>
                <Titulo>
                    <h3>Informações Complementares</h3>
                </Titulo>
                <div className={styles.linhaForm}>
                    <select className={styles.input50}>
                        <option selected>Você já possui algum outro animal de estimação?</option>
                        <option>Cachorro</option>
                        <option>Gato</option>
                        <option>Papagaio</option>
                        <option>Tartaruga</option>
                    </select>
                </div>
                <div>
                    <button onClick={handleSignup} className={styles.btnCadastrar}>Cadastre-se</button>
                </div>
                <span className={styles.msgErro}>{error}</span>
                <Titulo>
                    <h2>Já possui uma conta?</h2>
                </Titulo>
                <Link className={styles.link} to={'/Entrar'}>
                    Faça o Login
                </Link>
            </section>
        </div>
    )
}

export default Cadastro;