import { Route, Routes } from "react-router-dom"; 
import Home from "../pages/Home";
import Produtos from "../pages/Produtos";
import Contato from "../pages/Contato";
import Sobre from "../pages/Sobre";
import DetalhesProduto from "../pages/DetalhesProduto";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
    return (
        // Lista de rotas (routes)
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/detalhes_produto" element={<DetalhesProduto />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
    );
}
