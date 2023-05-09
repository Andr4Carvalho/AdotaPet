import Cabecalho from "components/Cabecalho";
import Rodape from "components/Rodape";
import { Outlet } from "react-router-dom";
import styles from './PaginaBase.module.css'

function PaginaBase(){
    return (
        <main>
            <div className={styles.container}>
                <Cabecalho />
                <Outlet />
                <Rodape />
            </div>
        </main>
    )
}

export default PaginaBase;