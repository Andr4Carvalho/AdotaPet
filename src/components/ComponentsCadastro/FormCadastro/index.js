import Titulo from 'components/Titulo';
import styles from './FormCadastro.module.css';

function FormCadastro(){
    return (
        <>
            <Titulo>
                <h3>Dados Pessoais</h3>
            </Titulo>
            <form>
                <div>
                    <input
                        type="text"
                        name="nome"
                        placeholder="Nome"
                    />
                </div>
                <div>
                <input
                        type="number"
                        name="cpf"
                        placeholder="CPF"
                    />
                    <input
                        type="number"
                        name="rg"
                        placeholder="RG"
                    />
                </div>
            </form>
        </>
    )
}

export default FormCadastro;