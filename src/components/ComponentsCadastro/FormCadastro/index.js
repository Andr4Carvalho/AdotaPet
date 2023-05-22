import Titulo from 'components/Titulo';
import styles from './FormCadastro.module.css';
import { IMaskInput } from "react-imask";

function FormCadastro() {
    return (
        <>
            <form>
                <Titulo>
                    <h3>Dados Pessoais</h3>
                </Titulo>
                <div className={styles.linhaForm}>
                    <input
                        type="text"
                        name="nome"
                        placeholder="Nome"
                        className={styles.input}
                    />
                </div>
                <div className={styles.linhaForm}>
                    <IMaskInput
                        mask="000.000.000-00"
                        name="cpf"
                        placeholder="CPF"
                        className={styles.input}
                    />
                    <input
                        type="number"
                        name="rg"
                        placeholder="RG"
                        className={styles.input}
                    />
                </div>
                <div className={styles.linhaForm}>
                    <div
                        className={styles.inputLabel}
                        onClick={() => {
                            document.getElementById("inputDtNasc").focus();
                        }}
                    >
                        <span>Data de Nascimento: </span>
                        <input
                            type="date"
                            name="dataNasc"
                            placeholder="Data de Nascimento"
                            id="inputDtNasc"
                            className={styles.inputNascimento}
                        />
                    </div>
                    <div className={styles.inputLabel}>
                        <span>Sexo: </span>
                        <label for="sexoMasc">
                            <input
                                type="radio"
                                name="sexo"
                                id="sexoMasc"
                                className={styles.inputRadio}
                            />
                            Masculino
                        </label>
                        <label for="sexoFem">
                            <input
                                type="radio"
                                name="sexo"
                                id="sexoFem"
                                className={styles.inputRadio}
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
                    />
                    <input
                        type="number"
                        name="numero"
                        placeholder="Número"
                        className={styles.input}
                    />
                </div>
                <div className={styles.linhaForm}>
                    <input
                        type="text"
                        name="bairro"
                        placeholder="Bairro"
                        className={styles.input}
                    />
                    <input
                        type="text"
                        name="complemento"
                        placeholder="Complemento"
                        className={styles.input}
                    />
                </div>
                <div className={styles.linhaForm}>
                    <input
                        type="text"
                        name="cidade"
                        placeholder="Cidade"
                        className={styles.input}
                    />
                    <input
                        type="text"
                        name="estado"
                        placeholder="Estado"
                        className={styles.input}
                    />
                    <input
                        type="number"
                        name="cep"
                        placeholder="CEP"
                        className={styles.input}
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
                    <button type="submit" className={styles.btnCadastrar}>Cadastre-se</button>
                </div>
            </form>
        </>
    )
}

export default FormCadastro;