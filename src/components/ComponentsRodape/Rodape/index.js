import Titulo from 'components/Titulo';
import styles from './Rodape.module.css'
import { useEffect, useState } from 'react';
import CardRodape from 'components/ComponentsRodape/CardsRodape';

function Rodape(){
    const [parceiros, setParceiros] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/Andr4Carvalho/AdotaPet/parceiros')
        .then(resposta => resposta.json())
        .then(dados => {
            setParceiros(dados)
        })
    }, [])

    return (
        <section className={styles.rodape}>
            <Titulo>
                <h1>Parceiros</h1>
            </Titulo>
            <section className={styles.container}>
                {parceiros.map((parceiro) => {
                    return <CardRodape {...parceiro} key={parceiro.nome} />
                })}
            </section>
        </section>
    )
}

export default Rodape;