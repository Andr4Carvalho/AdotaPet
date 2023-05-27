import { Link } from "react-router-dom";
import styles from "./Cabecalho.module.css";
import logo from './logo.png'
import CabecalhoLink from "components/ComponentsCabecalho/CabecalhoLink";
import CabecalhoBotao from "components/ComponentsCabecalho/CabecalhoBotao";
import useAuth from "hooks/useAuth";
import CabecalhoUsuario from "../CabecalhoUsuario";

const Private = () => {
    const { signed } = useAuth();

    if(signed > 0){
        return(
            <CabecalhoUsuario/>
        )
    } else {
        return(
            <CabecalhoBotao url="./Entrar">
                Entrar
            </CabecalhoBotao>
        )
    }
}

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
            <Private />
        </header>
    )
}

export default Cabecalho;