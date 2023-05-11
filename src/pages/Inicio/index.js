import Titulo from 'components/Titulo';
import styles from './Inicio.module.css'
import { useEffect, useState } from 'react';
import CardUltimasAdocoesInicio from 'components/ComponentsPgInicio/CardsUltimasAdocoesInicio';
import CardNoticias from 'components/ComponentsPgInicio/CardsNoticias';

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
                        <h2>QUEM SOMOS</h2>
                    </Titulo>
                    <p>
                        Bem-vindo à ONG “Adote um Amigo” um lugar onde o amor pelos animais é a nossa maior inspiração. Somos um grupo de voluntários apaixonados por animais que acreditam que cada ser vivo merece um lar amoroso e uma vida feliz.
                    </p>
                    <p>
                        Nós acreditamos que a adoção de animais é uma decisão responsável e importante que deve ser tomada com carinho e dedicação. É por isso que estamos aqui para ajudá-lo a encontrar o animal de estimação perfeito para você e sua família.
                    </p>
                    <p>
                        Nossa equipe é composta por voluntários dedicados, que trabalham incansavelmente para garantir que todos os animais sejam tratados com amor e carinho. Nós valorizamos a transparência em tudo o que fazemos, e estamos sempre prontos para responder a quaisquer perguntas ou preocupações que você possa ter.
                    </p>
                    <p>
                        Nosso objetivo final é ajudar a criar um mundo onde todos os animais recebam o amor e o cuidado que merecem. Se você está procurando adotar um novo membro para sua família, ou quer se juntar a nós como voluntário, não hesite em entrar em contato. Juntos, podemos fazer a diferença na vida dos animais.
                    </p>
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