import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css'; // Certifique-se de ajustar o caminho do CSS global, se necessário.

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Meu site incrível</title>
                <meta property="og:title" content="Meu site incrível" />
                <meta property="og:description" content="Descrição personalizada do meu site" />
                <meta property="og:image" content="https://gcomartins.github.io/my-website/preview.png" />
                <meta property="og:url" content="https://gcomartins.github.io/my-website/" />
                <meta property="og:type" content="website" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
