import { Link } from "react-router-dom";
import styles from "./Cabecalho.module.css";
import logo from './logo.png'
import CabecalhoLink from "components/ComponentsCabecalho/CabecalhoLink";
import CabecalhoBotao from "components/ComponentsCabecalho/CabecalhoBotao";

function Cabecalho(){
    return (
        <header className={styles.cabecalho}>
            <Link to="./">
                <img className={styles.logo} src={logo} alt="Logo do Adote um Amigo"></img>
            </Link>
            <CabecalhoLink url="./">
                Inicio
            </CabecalhoLink>
            <CabecalhoLink url="./Adote">
                Adote já
            </CabecalhoLink>
            <CabecalhoLink url="./QuemSomos">
                Quem Somos
            </CabecalhoLink>
            <CabecalhoLink url="./Contato">
                Contato
            </CabecalhoLink>
            <CabecalhoBotao url="./Entrar">
                Entrar
            </CabecalhoBotao>
        </header>
    )
}

export default Cabecalho;