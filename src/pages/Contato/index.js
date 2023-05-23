import Titulo from 'components/Titulo';
import { IMaskInput } from 'react-imask';
import styles from './Contato.module.css'

function Contato(){
    return (
        <div className={styles.containerLinha}>
            <div className={styles.container}>
                <section className={styles.cards}>
                    <Titulo>
                        <h2>CONTATO</h2>
                    </Titulo>
                    <p className={styles.paragrafoContato}>
                        <br/>
                        <span className={styles.span}>Endereço:</span> Rua Canarinho, N°: 01<br/>
                        <span className={styles.span}>Bairro:</span> Passarinhos<br/>
                        <span className={styles.span}>Cidade:</span> BirdCity<br/>
                        <span className={styles.span}>UF:</span> Aves
                    </p>
                    <p className={styles.paragrafoContato}>
                        <br/>
                        <span className={styles.span}>Telefone:</span> (00) 00000-0000<br/>
                        <span className={styles.span}>Email:</span> adotapet@hotmail.com<br/>
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
                                className={styles.input}
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder='Email'
                                className={styles.input}
                            />
                        </div>
                        <div>
                            <IMaskInput
                                mask="(00) 00000-0000"
                                name="telefone"
                                placeholder="Telefone"
                                className={styles.input}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="assunto"
                                placeholder='Assunto'
                                className={styles.input}
                            />
                        </div>
                        <div>
                            <textarea
                                type="text"
                                name="Dúvida"
                                placeholder='Dúvida'
                                rows="13"
                                className={styles.input}
                            />
                        </div>
                        <div>
                            <button type="submit" className={styles.btnEnviar}>Enviar</button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default Contato;