import Titulo from 'components/Titulo';
import styles from './Adote.module.css';
import { useEffect, useState } from 'react';
import CardsAnimaisDisponiveis from 'components/CardsAnimaisDisponiveis';

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
                <Titulo>
                    <h2 className={styles.titulo}>FILTRO_AQUI</h2>
                </Titulo>
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