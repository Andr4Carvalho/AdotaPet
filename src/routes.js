import PaginaBase from "./pages/PaginaBase";
import Inicio from "./pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contato from "pages/Contato";
import Entrar from "pages/Entrar";
import Cadastro from "pages/Cadastro";
import Adote from "pages/Adote";
import QuemSomos from "pages/QuemSomos";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Inicio />} />
                    <Route path="/contato" element={<Contato />} />
                    <Route path="/entrar" element={<Entrar />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/adote" element={<Adote />} />
                    <Route path="/quemsomos" element={<QuemSomos />} />
                    {/*<Route path="*" element={NaoEncontrada} />*/}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;