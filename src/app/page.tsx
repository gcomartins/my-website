"use client"
import Head from "next/head";
import styles from "./page.module.css";
import { useMemo, useState } from "react";
import English from "./intl/languages/en";
import Portuguese from "./intl/languages/pt";
import Intl from "./intl/language";

export default function Home() {
  const [isEnglish, setIsEnglish] = useState(true);
  const intl = useMemo<Intl>(() => {
    return isEnglish ? new English() : new Portuguese()
  }, [isEnglish]);

  const previewTitle = "Hello, there!"
  const previewDescription = "This is my portfolio website! Lets check!";
  const previewImage = "/preview.png";

  const switchLanguage = () => setIsEnglish(!isEnglish)

  return (
    <>
      <Head>
        <title>Hii</title>
        <meta property='og:title' content={previewTitle} />
        <meta property='og:description' content={previewDescription} />
        <meta property='og:image' content={previewImage} />
        <meta property='og:url' content='https://gcomartins.github.io/my-website/' />
        <meta property='og:type' content='website' />
      </Head>
      <div className={styles.page}>
        <button onClick={switchLanguage}>Change language</button>
        <p>{intl.getTitle()}</p>
        <p>{intl.getDescription()}</p>
        <p>{intl.getMyMainTechnologies()}</p>
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
