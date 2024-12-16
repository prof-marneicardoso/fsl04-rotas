// Navbar.jsx

import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    {/* <a href="/">Home</a> */}
                    <Link to="/">Home</Link>
                </li>
                <li>
                    {/* <a href="/produtos">Produtos</a> */}
                    <Link to="/produtos">Produtos</Link>
                </li>
                <li>
                    {/* <a href="/contato">Contato</a> */}
                    <Link to="/contato">Contato</Link>
                </li>
                <li>
                    {/* <a href="/sobre">Sobre</a> */}
                    <Link to="/sobre">Sobre</Link>
                </li>
            </ul>
        </nav>
    );
}
