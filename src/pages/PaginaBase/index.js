import Cabecalho from "components/Cabecalho";
import { Outlet } from "react-router-dom";

function PaginaBase(){
    return (
        <main>
            <Cabecalho />
            <Outlet />
        </main>
    )
}

export default PaginaBase;