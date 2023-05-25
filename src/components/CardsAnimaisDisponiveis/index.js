import Modal from 'components/Modal';
import styles from './CardsAnimaisDisponiveis.module.css'
import { useState } from 'react';

function CardsAnimaisDisponiveis({nome, imagem, sexo, peso, idade, localizacao}){
    const [openModal, setOpenModal] = useState(false);
 
    return (
        <>
            <div className={styles.container} onClick={() => {
                setOpenModal(true);
            }}>
                <img src={imagem} alt={nome} className={styles.capa} />
                <div className={styles.divInfos}>
                    <span className={styles.nomeAnimal}>{nome}</span><br />
                    {sexo}, {peso}, {idade} <br />
                    {localizacao}
                    <button className={styles.button}>Quero Adotar</button>
                </div>
            </div>
            <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} titulo={nome} imagem={imagem}>
                Nome: {nome}<br/>
                Peso: {peso}<br/>
                Idade Aproximada: {idade}<br/>
                Sexo: {sexo}<br/>
                Espécie<br/>
                Porte<br/>
                Raça<br/>
                Local<br/>
                Sobre o pet<br/> 
                Quero Adotar
                Favoritar
            </Modal>
        </>
    )
}

export default CardsAnimaisDisponiveis;