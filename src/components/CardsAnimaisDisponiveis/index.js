import Modal from 'components/Modal';
import styles from './CardsAnimaisDisponiveis.module.css'
import { useState } from 'react';
import useAuth from 'hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CardsAnimaisDisponiveis({nome, imagem, sexo, peso, idade, localizacao, especie, porte, raca, sobre}){
    const [openModal, setOpenModal] = useState(false);
    const [openModal2, setOpenModal2] = useState(false);
    var loc = localizacao.split(",")
    const { signed } = useAuth();
    const navigate = useNavigate();

    const notify = (Mensagem) => toast.success(Mensagem, {
        position: "top-right",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
 
    return (
        <>
            <ToastContainer 
                position="top-right"
                autoClose={10000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"/>
            <div className={styles.container} onClick={() => {
                setOpenModal(true);
            }}>
                <img src={imagem} alt={nome} className={styles.capa} />
                <div className={styles.divInfos}>
                    <span className={styles.nomeAnimal}>{nome}</span><br />
                    {sexo}, {peso}, {idade} <br />
                    {loc[1]}
                    <button className={styles.button}>Quero Adotar</button>
                </div>
            </div>
            <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} titulo={nome} imagem={imagem}>
                <div className={styles.divLinhaDetalhes}>
                    <span>Nome: </span>
                    {nome}
                </div>
                <div className={styles.divLinhaDetalhes}>
                    <span>Peso: </span> 
                    {peso}
                </div>
                <div className={styles.divLinhaDetalhes}>
                    <span>Idade Aproximada: </span> 
                    {idade}
                </div>
                <div className={styles.divLinhaDetalhes}>
                    <span>Sexo: </span> 
                    {sexo}
                </div>
                <div className={styles.divLinhaDetalhes}>
                    <span>Espécie: </span> 
                    {especie}
                </div>
                <div className={styles.divLinhaDetalhes}>
                    <span>Porte: </span> 
                    {porte}
                </div>
                <div className={styles.divLinhaDetalhes}>
                    <span>Raça: </span> 
                    {raca}
                </div>
                <div className={styles.divLinhaDetalhes}>
                    <span>Local: </span> 
                    {localizacao}
                </div>
                <div className={styles.divLinhaDetalhes}>
                    <span>Sobre o pet: </span><br/>
                    {sobre}
                </div>
                <button 
                    className={styles.btnModal}
                    onClick={() => {
                        if(signed > 0){
                            notify("Interesse em adotar registrado com sucesso!");
                            setOpenModal(false);
                            setOpenModal2(true);
                        } else {
                            navigate("/entrar");
                        }
                    }}
                >
                    Quero Adotar
                </button>
            </Modal>
            <Modal isOpen={openModal2} setModalOpen={() => setOpenModal2(!openModal2)} titulo={nome} imagem={imagem}>
                <span className={styles.textoObrigadoModal}>
                    Muito obrigado pelo interesse em proporcionar um novo lar cheio de amor e carinho para o pet {nome}. Ele ficará muito feliz em receber sua generosidade.
                </span>
                <span className={styles.textoObrigadoModal}>
                    Em breve, você receberá um email com todas as informações necessárias para agendar uma visita ao abrigo e conhecer o pet {nome} pessoalmente. Durante a visita, nossa equipe estará disponível para responder suas perguntas e ajudá-lo(a) no processo de adoção.
                </span>
                <span className={styles.textoObrigadoModal}>
                    Agradecemos por abrir seu coração e oferecer ao pet {nome} uma oportunidade de ter uma vida melhor. Se surgirem mais dúvidas antes da visita, não hesite em nos contatar. Estamos ansiosos para acompanhá-lo(a) nessa jornada de amor e felicidade.
                </span>
                <span className={styles.textoObrigadoModal}>
                    Obrigado novamente por escolher a adoção. Em breve, vocês estarão começando uma linda história juntos.
                </span>
            </Modal>
        </>
    )
}

export default CardsAnimaisDisponiveis;