import Head from "next/head";
import styles from "./page.module.css";


export default function Home() {
  return (
    <>
      <Head>
        <title>Hii</title>
        <meta property='og:title' content={property.name} />
        <meta property='og:description' content={property.description} />
        <meta property='og:image' content={property.image} />
        <meta property='og:url' content='https://gcomartins.github.io/my-website/' />
        <meta property='og:type' content='website' />
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
  )
}
