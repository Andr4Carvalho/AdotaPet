import styles from './Modal.module.css'

function Modal({isOpen, setModalOpen, titulo, imagem, children}){
    if(isOpen){
        return(
            <div className={styles.bgModal}>
                <div className={styles.modal}>
                    <span className={styles.btnClose} onClick={setModalOpen}>&times;</span>
                    <span className={styles.titulo}>{titulo}</span>
                    <hr/>
                    <br/>
                    <div className={styles.divLinha}>
                        <div>
                            <img src={imagem} className={styles.imagemModal} />
                        </div>
                        <div className={styles.divDados}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
    return null;
}

export default Modal;