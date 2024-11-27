import Link from 'next/link';

const ContactPage = () => {
    return (
        <div>
            <h1>Contato</h1>
            <form>
                <label htmlFor="name">Nome:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Mensagem:</label>
                <textarea id="message" name="message" required></textarea>

                <button type="submit">Enviar</button>
            </form>
            <Link href="/"><a>Voltar para Home</a></Link>
        </div>
    );
}

export default ContactPage