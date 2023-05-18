import Titulo from 'components/Titulo';
import styles from './Adote.module.css';
import { useEffect, useState } from 'react';
import CardUltimasAdocoesInicio from 'components/ComponentsPgInicio/CardsUltimasAdocoesInicio';

function Adote(){
    const [ultimasAdocoes, setultimasAdocoes] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/Andr4Carvalho/AdotaPet/ultimasAdocoes')
        .then(resposta => resposta.json())
        .then(dados => {
            setultimasAdocoes(dados)
        })

        
    }, [])

    return(
        <div className={styles.linha}>
            <div className={styles.divSidebar}>
                <Titulo>
                    <h2 className={styles.titulo}>FILTRO_AQUI</h2>
                </Titulo>
            </div>
            <div className={styles.divAnimais}>
                <Titulo>
                    <h2 className={styles.titulo}>Animais disponíveis</h2>
                </Titulo>
                <section className={styles.cardsDisponiveis}>
                    {ultimasAdocoes.map((adocao) => {
                        return <CardUltimasAdocoesInicio {...adocao} key={adocao.nome} />
                    })}
                </section>
            </div>
        </div>
    )
}

export default Adote;