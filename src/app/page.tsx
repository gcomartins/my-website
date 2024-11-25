import Head from "next/head";
import styles from "./page.module.css";


export default function Home() {
  const sharp = require('sharp');

  const previewImage = sharp('input.jpg')
    .resize(1200, 630)
    .toFormat('webp')
    .toFile('output.webp', (err: any, info: any) => {
      if (err) throw err;
      console.log('Image converted successfully:', info);
    });
  return (
    <>
      <Head>
        <title>Meu site incrível</title>
        <meta property="og:title" content="Meu site incrível" />
        <meta property="og:description" content="Descrição personalizada do meu site" />
        <meta property="og:image" content={previewImage} />
        <meta property="og:url" content="https://gcomartins.github.io/my-website/" />
        <meta property="og:type" content="website" />
      </Head>
      <div className={styles.page}>
        <p>Hey, there!</p>
        <p>My name is Guilherme and this is my website!<br />I am a mobile developer, focused in Android, with 2 years of experience.</p>
        <p>My main techonolgies are:</p>
        <ul className={styles.list}>
          <i>Android Kotlin/Java (2 years)</i>
          <i>React/React Native (1 year)</i>
          <i>Javascript (1 year)</i>
          <i>Flutter (1 and a half year)</i>
        </ul>
      </div>
    </>
  );
}
