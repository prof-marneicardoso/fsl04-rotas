import { Link } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default function Produtos() {
    return (
        <>
            <Header />
            <Navbar />
            <Main>
                <h1>Produtos</h1>

                <ul>
                    <li>9. T-Shirt preta</li>
                    <li>10. Tênis</li>

                    <li>
                        <Link to="/detalhes_produto">11. Calça</Link>
                    </li>

                    <li>12. Bermuda</li>
                </ul>
            </Main>
            <Footer />
        </>
    );
}
