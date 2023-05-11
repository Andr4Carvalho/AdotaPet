import Titulo from 'components/Titulo';
import styles from './Contato.module.css'

function Contato(){
    return (
        <div className={styles.containerLinha}>
            <div className={styles.container}>
                <section className={styles.cards}>
                    <Titulo>
                        <h2>CONTATO</h2>
                    </Titulo>
                    <p>
                        <br/>
                        <span>Endereço:</span> Rua Canarinho, N°: 01<br/>
                        <span>Bairro:</span> Passarinhos<br/>
                        <span>Cidade:</span> BirdCity<br/>
                        <span>UF:</span> Aves
                    </p>
                    <p>
                        <br/>
                        <span>Telefone:</span> (00) 00000-0000<br/>
                        <span>Email:</span> adotapet@hotmail.com<br/>
                    </p>
                </section>
                <img src="logo.png" alt="Logo Adote um amigo" className={styles.imagem} />
            </div>
            <div className={styles.container}>
                <section className={styles.cards}>
                    <Titulo>
                        <h2>ENVIE SUA DÚVIDA</h2>
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
                                type="email"
                                name="email"
                                placeholder='Email'
                            />
                        </div>
                        <div>
                            <input
                                type="number"
                                name="telefone"
                                placeholder='Telefone'
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="assunto"
                                placeholder='Assunto'
                            />
                        </div>
                        <div>
                            <textarea
                                type="text"
                                name="Dúvida"
                                placeholder='Dúvida'
                            />
                        </div>
                        <div>
                            <button type="submit">Enviar</button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default Contato;