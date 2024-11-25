import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <p>Hey, there!</p>
      <p>My name is Guilherme and this is my website!<br/>I am a mobile developer, focused in Android, with 2 years of experience.</p>
      <p>My main techonolgies are:</p>
      <ul className={styles.list}>
        <i>Android Kotlin/Java (2 years)</i>
        <i>React/React Native (1 year)</i>
        <i>Javascript (1 year)</i>
        <i>Flutter (1 and a half year)</i>
      </ul>
    </div>
  );
}
