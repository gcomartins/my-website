"use client"
import Head from "next/head";
import styles from "./page.module.css";
import { CSSProperties, useMemo, useState } from "react";
import English from "./intl/languages/en";
import Portuguese from "./intl/languages/pt";
import Intl from "./intl/language";
import ThemeVariation from "./theme/theme";
import BlackTheme from "./theme/variations/blackTheme";
import WhiteTheme from "./theme/variations/whiteTheme";
import MyNavBar from "./components/navbar/myNavbar";
import AboutMe from "./components/aboutMe/aboutMe";
import Experience from "./components/experience/experience";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import AppState from "./appState";

export default function Home() {
  const [themeVariation, setThemeVariation] = useState(0)
  const theme = useMemo<ThemeVariation>(() => {
    switch (themeVariation) {
      case 0:
        return new BlackTheme()
      case 1:
        return new WhiteTheme();
      default:
        return new BlackTheme()
    }
  }, [themeVariation]);

  const [selectedLanguage, setLanguague] = useState('en');
  const intl = useMemo<Intl>(() => {
    switch (selectedLanguage) {
      case 'en':
        return new English()
      case 'pt':
        return new Portuguese()
      default:
        return new English()
    }
  }, [selectedLanguage]);

  const previewTitle = "Guilherme's Portfolio";
  const previewDescription = "Mobile developer with expertise in Android Native, React Native, Flutter, and iOS";
  const previewImage = "/preview.png";

  const switchLanguage = (newLanguage: string) => {
    console.log(`Changing languague to ${newLanguage}`);
    setLanguague(newLanguage)
  }
  const switchTheme = () => {
    AppState.isDarkMode = !AppState.isDarkMode
    setThemeVariation(themeVariation === 1 ? 0 : themeVariation + 1)
  }

  const myStyles = handleStyles(theme)
  return (
    <>
      <Head>
        <title>Guilherme Martins - Mobile Developer</title>
        <meta property='og:title' content={previewTitle} />
        <meta property='og:description' content={previewDescription} />
        <meta property='og:image' content={previewImage} />
        <meta property='og:url' content='https://gcomartins.github.io/my-website/' />
        <meta property='og:type' content='website' />
      </Head>
      <div style={myStyles.page} className={styles.page}>
        <MyNavBar theme={theme} intl={intl} switchLanguage={switchLanguage} switchTheme={switchTheme} />
        <AboutMe theme={theme} intl={intl} />
        <Experience theme={theme} intl={intl} />
        <Projects theme={theme} intl={intl} />
        <Contact theme={theme} intl={intl} />
      </div>
    </>
  );
}

const handleStyles: (theme: ThemeVariation) => Record<string, CSSProperties> = (theme: ThemeVariation) => {
  return {
    page: {
      backgroundColor: theme.getBackgroundColor(),
      transition: "0.7s",
    },
    content: {
      paddingLeft: "40px",
      paddingRight: "40px",
      paddingTop: "80px"
    },
    list: {
      color: theme.getForegroundColor(),
      display: 'flex',
      flexDirection: 'column'
    }
  }
}
