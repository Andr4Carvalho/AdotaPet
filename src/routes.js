import PaginaBase from "./pages/PaginaBase";
import Inicio from "./pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Inicio />} />
                    {/*<Route path="/adote" element={Adote} />
                    <Route path="/entrar" element={Entrar} />
                    <Route path="/cadastro" element={Cadastro} />
                    <Route path="/contato" element={Contato} />
                    <Route path="*" element={NaoEncontrada} />*/}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;