import Titulo from 'components/Titulo';
import styles from './Adote.module.css';
import { useEffect, useState } from 'react';
import CardsAnimaisDisponiveis from 'components/CardsAnimaisDisponiveis';
import icone from './setaBaixo.svg'

function Adote(){
    const [animaisDisponiveis, setAnimaisDisponiveis] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/Andr4Carvalho/AdotaPet/animaisDisponiveis')
        .then(resposta => resposta.json())
        .then(dados => {
            setAnimaisDisponiveis(dados)
        })
    }, [])

    return(
        <div className={styles.linha}>
            <div className={styles.divSidebar}>
                <div> 
                    <div className={styles.accordionItem}>
                        <input type="checkbox" name="accordion" id="accordion-1" />
                        <label for= "accordion-1">
                            <span>Espécie</span>
                            <img 
                                src={icone} 
                                className={styles.iconSeta} 
                            />
                        </label>
                        <div className={styles.accordionContent}>
                            <div className={styles.itemAccordion}>
                                <input type="checkbox" id="Cachorros" name="Cachorros" />
                                <label for="Cachorros">Cachorros</label>
                            </div>
                            <div className={styles.itemAccordion}>
                                <input type="checkbox" id="Gatos" name="Gatos" />
                                <label for="Gatos">Gatos</label>
                            </div>
                            <div className={styles.itemAccordion}>
                                <input type="checkbox" id="Tartarugas" name="Tartarugas" />
                                <label for="Tartarugas">Tartarugas</label>
                            </div>
                            <div className={styles.itemAccordion}>
                                <input type="checkbox" id="Roedores" name="Roedores" />
                                <label for="Roedores">Roedores</label>
                            </div>
                        </div>
                    </div> 
                    <div className={styles.accordionItem}>
                        <input type="checkbox" name="accordion" id="accordion-2" />
                        <label for= "accordion-2">
                            <span>Idade</span>
                            <img 
                                src={icone} 
                                className={styles.iconSeta} 
                            />
                        </label>
                        <div className={styles.accordionContent}>
                            <div className={styles.itemAccordion}>
                                <input type="checkbox" id="option1" name="option1" />
                                <label for="option1">0 a 6 meses (Filhotes)</label>
                            </div>
                            <div className={styles.itemAccordion}>
                                <input type="checkbox" id="option2" name="option2" />
                                <label for="option2">7 meses a 5 anos (Jovens)</label>
                            </div>
                            <div className={styles.itemAccordion}>
                                <input type="checkbox" id="option3" name="option3" />
                                <label for="option3">6 a 10 anos (Adultos)</label>
                            </div>
                            <div className={styles.itemAccordion}>
                                <input type="checkbox" id="option4" name="option4" />
                                <label for="option4">11 anos ou mais (Idosos)</label>
                            </div>
                        </div>
                    </div> 
                    <div  className={styles.accordionItem}>
                        <input type="checkbox" name="accordion" id="accordion-3" />
                        <label for= "accordion-3">
                            <span>Porte</span>
                            <img 
                                src={icone} 
                                className={styles.iconSeta} 
                            />
                        </label>
                        <div className={styles.accordionContent}>
                            <article class="feature1">
                                <input type="checkbox" id="feature1" className={styles.checkSelecao} />
                                <div>
                                    <span>
                                        Pequeno
                                    </span>
                                </div>
                            </article>
                            <article class="feature2">
                                <input type="checkbox" id="feature2" className={styles.checkSelecao} />
                                <div>
                                    <span>
                                        Médio
                                    </span>
                                </div>
                            </article>
                            <article class="feature3">
                                <input type="checkbox" id="feature3" className={styles.checkSelecao} />
                                <div>
                                    <span>
                                        Grande
                                    </span>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div  className={styles.accordionItem}>
                        <input type="checkbox" name="accordion" id="accordion-4" />
                        <label for= "accordion-4">
                            <span>Sexo</span>
                            <img 
                                src={icone} 
                                className={styles.iconSeta} 
                            />
                        </label>
                        <div className={styles.accordionContent}>
                            <article class="feature4">
                                <input type="checkbox" id="feature4" className={styles.checkSelecao} />
                                <div>
                                    <span>
                                        Macho
                                    </span>
                                </div>
                            </article>
                            <article class="feature5">
                                <input type="checkbox" id="feature5" className={styles.checkSelecao} />
                                <div>
                                    <span>
                                        Fêmea
                                    </span>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div  className={styles.accordionItem}>
                        <input type="checkbox" name="accordion" id="accordion-5" />
                        <label for= "accordion-5">
                            <span>Localização</span>
                            <img 
                                src={icone} 
                                className={styles.iconSeta} 
                            />
                        </label>
                        <div className={styles.accordionContent}>
                        <select className={styles.selectLocalizacao}>
                                <option selected>Estado</option>
                                <option>Bahia</option>
                                <option>São Paulo</option>
                                <option>Sergipe</option>
                                <option>Distrito Federal</option>
                                <option>Ceará</option>
                                <option>Mato Grosso</option>
                            </select>
                            <select className={styles.selectLocalizacao}>
                                <option selected>Cidade</option>
                                <option>Taquaritinga</option>
                                <option>Monte Alto</option>
                                <option>Araraquara</option>
                                <option>Ribeirão Preto</option>
                                <option>Santa Ernestina</option>
                                <option>Américo Brasiliense</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.divAnimais}>
                <Titulo>
                    <h1 className={styles.titulo}>Animais disponíveis</h1>
                </Titulo>
                <section className={styles.cardsDisponiveis}>
                    {animaisDisponiveis.map((animal) => {
                        return <CardsAnimaisDisponiveis {...animal} key={animal.nome} />
                    })}
                </section>
            </div>
        </div>
    )
}

export default Adote;