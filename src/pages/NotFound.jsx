import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Navbar from "../components/Navbar";

export default function NotFound() {
    return (
        <>
            <Header />
            <Navbar />
            <Main>
                <h1>404 - Page Not Found</h1>
            </Main>
            <Footer />
        </>
    );
}
