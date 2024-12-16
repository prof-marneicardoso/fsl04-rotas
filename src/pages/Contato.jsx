
export default function Contato() {
    return (
        <div>
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
        </div>
    );
}
