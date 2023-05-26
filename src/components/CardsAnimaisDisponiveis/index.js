import Modal from 'components/Modal';
import styles from './CardsAnimaisDisponiveis.module.css'
import { useState } from 'react';

function CardsAnimaisDisponiveis({nome, imagem, sexo, peso, idade, localizacao, especie, porte, raca, sobre}){
    const [openModal, setOpenModal] = useState(false);
    var loc = localizacao.split(",")
 
    return (
        <>
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
                <div className={styles.divBtn}>
                    <button className={styles.btnModal}>Quero Adotar</button>
                    <button className={styles.btnModal}>Favoritar</button>
                </div>
            </Modal>
        </>
    )
}

export default CardsAnimaisDisponiveis;