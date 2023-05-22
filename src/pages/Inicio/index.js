import Titulo from 'components/Titulo';
import styles from './Inicio.module.css'
import { useEffect, useState } from 'react';
import CardUltimasAdocoesInicio from 'components/ComponentsPgInicio/CardsUltimasAdocoesInicio';
import CardNoticias from 'components/ComponentsPgInicio/CardsNoticias';
import { Link } from 'react-router-dom';

function Inicio(){
    const [ultimasAdocoes, setultimasAdocoes] = useState([]);
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/Andr4Carvalho/AdotaPet/ultimasAdocoes')
        .then(resposta => resposta.json())
        .then(dados => {
            setultimasAdocoes(dados)
        })

        fetch('https://my-json-server.typicode.com/Andr4Carvalho/AdotaPet/noticias')
        .then(resposta => resposta.json())
        .then(dados => {
            setNoticias(dados)
        })
    }, [])

    return (
        <div className={styles.containerLinha}>
            <div className={styles.container}>
            <section className={styles.cards}>
                <Titulo>
                    <h2>Animais Disponíveis</h2>
                </Titulo>
                <section className={styles.cardsUltimasAdocoes}>
                    {ultimasAdocoes.map((adocao) => {
                        return <CardUltimasAdocoesInicio {...adocao} key={adocao.nome} />
                    })}
                </section>
                <div>
                    <Link to="/Adote" className={styles.link}>
                        Ver mais animais
                    </Link>
                </div>
            </section>
                <section className={styles.cards}>
                    <Titulo>
                        <h2>ÚLTIMAS ADOÇÕES</h2>
                    </Titulo>
                    <section className={styles.cardsUltimasAdocoes}>
                        {ultimasAdocoes.map((adocao) => {
                            return <CardUltimasAdocoesInicio {...adocao} key={adocao.nome} />
                        })}
                    </section>
                </section>
            </div>
            <div className={styles.container}>
                <section className={styles.cards}>
                    <Titulo>
                        <h2>NOTÍCIAS</h2>
                    </Titulo>
                    <section>
                        {noticias.map((noticia) => {
                            return <CardNoticias {...noticia} key={noticia.titulo} />
                        })}
                    </section>
                </section>
            </div>
        </div>
    )
}

export default Inicio;