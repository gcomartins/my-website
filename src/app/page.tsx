"use client"
import Head from "next/head";
import styles from "./page.module.css";
import { useMemo, useState } from "react";
import English from "./intl/languages/en";
import Portuguese from "./intl/languages/pt";
import Intl from "./intl/language";
import ThemeVariation from "./theme/theme";
import BlackTheme from "./theme/variations/blackTheme";
import WhiteTheme from "./theme/variations/whiteTheme";
import YellowTheme from "./theme/variations/yellowTheme";
import OrangeTheme from "./theme/variations/orangeTheme";

export default function Home() {
  const [themeVariation, setThemeVariation] = useState(0)
  const theme = useMemo<ThemeVariation>(() => {
    switch (themeVariation) {
      case 0:
        return new BlackTheme()
      case 1:
        return new WhiteTheme();
      case 2:
        return new YellowTheme()
      case 3:
        return new OrangeTheme()
      default:
        return new BlackTheme()
    }
  }, [themeVariation]);

  const [isEnglish, setIsEnglish] = useState(true);
  const intl = useMemo<Intl>(() => {
    return isEnglish ? new English() : new Portuguese()
  }, [isEnglish]);

  const previewTitle = "Hello, there!"
  const previewDescription = "This is my portfolio website! Lets check!";
  const previewImage = "/preview.png";

  const switchLanguage = () => setIsEnglish(!isEnglish)
  const switchTheme = () => setThemeVariation(themeVariation === 3 ? 0 : themeVariation + 1)

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
      <div style={{ backgroundColor: theme.getBackgroundColor(), transition: "0.7s" }} className={styles.page}>
        <div>
          <button onClick={switchLanguage}>Change language</button>
          <button onClick={switchTheme}>Change theme</button>
        </div>
        <p style={{ color: theme.getForegroundColor() }}>{intl.getTitle()}</p>
        <p style={{ color: theme.getForegroundColor() }}>{intl.getDescription()}</p>
        <p style={{ color: theme.getForegroundColor() }}>{intl.getMyMainTechnologies()}</p>
        <ul style={{ color: theme.getForegroundColor() }} className={styles.list}>
          <i>Android Kotlin/Java (2 years)</i>
          <i>React/React Native (1 year)</i>
          <i>Javascript (1 year)</i>
          <i>Flutter (1 and a half year)</i>
        </ul>
      </div>
    </>
  );
}
