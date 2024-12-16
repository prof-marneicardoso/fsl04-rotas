import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Navbar from "../components/Navbar";

export default function Contato() {
    return (
        <>
            <Header />
            <Navbar />
            <Main>
                <h1>Contato</h1>

                <h3>Entre em contato</h3>

                <form>
                <label>Nome</label>
                <input type="text" />

                <br /><br />
                <label>E-mail</label>
                <input type="email" />

                <br /><br />
                <label>Mensagem</label>
                <textarea></textarea>

                <br /><br />
                <button type="submit">Enviar Mensagem</button>
            </form>
            </Main>
            <Footer />
        </>
    );
}
