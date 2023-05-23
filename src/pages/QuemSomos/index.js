import Titulo from 'components/Titulo';
import styles from './QuemSomos.module.css'

function QuemSomos(){
    return(
        <>
            <section className={styles.cards}>
                <Titulo>
                    <h1>QUEM SOMOS</h1>
                </Titulo>
                <p className={styles.textoQuemSomos}>
                    Bem-vindo à organização não governamental (ONG) “Adote um Amigo” um lugar onde o amor pelos animais é a nossa maior inspiração. Somos um grupo de voluntários apaixonados por animais que acreditam que cada ser vivo merece um lar amoroso e uma vida feliz.
                </p>
                <p className={styles.textoQuemSomos}>
                    Nós acreditamos que a adoção de animais é uma decisão responsável e importante que deve ser tomada com carinho e dedicação. É por isso que estamos aqui para ajudá-lo a encontrar o animal de estimação perfeito para você e sua família.
                </p>
                <p className={styles.textoQuemSomos}>
                    Nossa equipe é composta por voluntários dedicados, que trabalham incansavelmente para garantir que todos os animais sejam tratados com amor e carinho. Nós valorizamos a transparência em tudo o que fazemos, e estamos sempre prontos para responder a quaisquer perguntas ou preocupações que você possa ter.
                </p>
                <p className={styles.textoQuemSomos}>
                    Nosso objetivo final é ajudar a criar um mundo onde todos os animais recebam o amor e o cuidado que merecem. Se você está procurando adotar um novo membro para sua família, ou quer se juntar a nós como voluntário, não hesite em entrar em contato. Juntos, podemos fazer a diferença na vida dos animais.
                </p>
            </section>
            <section className={styles.cards}>
                <Titulo>
                    <h1>O Abrigo</h1>
                </Titulo>
                <p className={styles.textoQuemSomos}>
                    A Adota Pet é uma Sociedade Protetora dos Animais. Não aceitamos a eutanásia porque acreditamos que todos os animais têm direito à vida, e a vivê-la integralmente, da mesmo forma que nós, humanos, a vivemos. TODOS os animais que chegam à Adota Pet recebem tratamento médico e tem assegurada a oportunidade de um lar através da adoção. É inconcebível a prática do recolhimento de animais nas ruas com destino ao sacrifício. Se conseguimos ser tão criativos, ao demonstrar a nossa capacidade de evolução intelectual, não é possível que não consigamos pensar na modificação de práticas covardes como esta que leva ao óbito milhares de animais inocentes. Muitos abrigos também optam por colocar para dormir os animais idosos ou doentes com o argumento de por fim ao sofrimento, ou controlar a quantidade de seres vivos abrigados evitando a superlotação. Isto não acontece na Adota Pet.
                </p>
                <p className={styles.textoQuemSomos}>
                    Somos criticados por não matar, pela superpopulação do nosso abrigo, mas dormimos com a consciência tranquila.  Fazemos o máximo possível para salvar e proteger as vidas que estão sob a nossa guarda.
                </p>
                <p className={styles.textoQuemSomos}>
                    A Adota Pet abriga, atualmente, mais de 2.000 animais, a maioria cães e gatos. O abandono acontece sob vários disfarces. Conheça apenas alguns deles que nos são apresentados todos os dias:<br/><br/>
                    - Necessidade de tratamentos médicos<br/>
                    - Mudança de endereço<br/>
                    - Nascimento de bebês<br/>
                    - Problemas de "odor"<br/>
                    - Separação de casal<br/>
                    - Animal Idoso <br/>
                    - Desemprego<br/>
                    - Despejo<br/>
                </p>
                <p className={styles.textoQuemSomos}>
                    Há também os que entregam seus animais MENTINDO ao dizer que os encontraram na rua. Quando viram as costas e voltam para as suas casas, os animais UIVAM de tristeza, entram em DEPRESSÃO e MORREM. 
                </p>
                <br/>
                <Titulo>
                    <h1>Atendimento Médico</h1>
                </Titulo>
                <p className={styles.textoQuemSomos}>
                    Uma equipe de cinco ou seis médicos trabalha atendendo os animais abrigados. Os médicos contam com auxiliares de serviços veterinários. Outros dois médicos cuidam especificamente do gatil. O trabalho é muito dinâmico. Dezenas de animais adoentados, idosos e deficientes físicos são levados para  a soroterapia todas as manhãs. Os supervisores mantém a ordem por conhecerem plenamente todo o mecanismo do abrigo e onde está localizado cada animal abrigado. Orientam também as equipes que limpam, trocam água e comida, alimentam os filhotes que não sobreviveriam sozinhos. Para trabalhar na Adota Pet, gostar de animais não basta. TODOS os funcionários demonstram o seu respeito por eles na lida diária, o que facilmente pode ser comprovado por qualquer visitante que esteja na Adota Pet.
                </p>
                <p className={styles.textoQuemSomos}>
                    Os animais abrigados são esterilizados para que não haja procriação e nem brigas com a chegada do cio das cadelas e gatas. A vacinação é constante. Temos que oferecer tratamento diferenciado às cadelas e gatas que chegam à Adota Pet em processo gestacional, devemos alimentar adequadamente os idosos e filhotes, ambos sem dentes e com muita dificuldade de se alimentarem.  Animais anti-sociáveis ficam em canis separados e são diariamente observados pelos veterinários, recebendo toda a assistência que igualmente merecem.
                </p>
            </section>
            <section className={styles.cards}>
                <Titulo>
                    <h1>Onde nos Encontrar</h1>
                </Titulo>
                <p className={styles.textoQuemSomos}>
                    <span className={styles.negrito}> Endereço: </span>Rua Canarinho,
                    <span className={styles.negrito}> Numero: </span>01,
                    <span className={styles.negrito}> Bairro: </span>Passarinhos,
                    <span className={styles.negrito}> Cidade: </span>BirdCity,
                    <span className={styles.negrito}> UF: </span>Aves
                    <br/><br/><span className={styles.negrito}> Telefone: </span>(00) 00000-0000,
                    <span className={styles.negrito}> Email: </span>adotapet@hotmail.com
                </p>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3713.978400186911!2d-48.517864788284534!3d-21.430093980239533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b93bd3b48e7047%3A0x1808de33145ee4e0!2sFatec%20Taquaritinga!5e0!3m2!1spt-BR!2sbr!4v1684777435950!5m2!1spt-BR!2sbr" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade" 
                    className={styles.mapa}
                    title='Localizacao da Ong'/>
            </section>
        </>
    )
}

export default QuemSomos;