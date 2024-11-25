import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css'; // Certifique-se de ajustar o caminho do CSS global, se necessário.

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                {/* Meta tags Open Graph para prévias no WhatsApp */}
                <meta property="og:title" content="See my website!" />
                <meta
                    property="og:description"
                    content="Hi, there! My name is Guilherme and this is my website!"
                />
                <meta
                    property="og:image"
                    content="https://gcomartins.github.io/my-website/spike.png"
                />
                <meta property="og:type" content="website" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
