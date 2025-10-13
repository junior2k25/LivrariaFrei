import { BrowserRouter, Routes, Route } from "react-router";
import Inicio from "./pages/inicio";
import Sobre from "./pages/sobre";
import Login from "./pages/login";


export default function Navegacao(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio/>} />
                <Route path="/sobre" element={<Sobre/>} />
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}