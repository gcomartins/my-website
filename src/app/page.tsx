import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Hello, there!</h1>
      <p>My name is Guilherme and this is my website!</p>
      <p>I am a mobile developer, focused in Android, with 2 years of experience.</p>
      <p>My main techonolgies are:</p>
      <ul>
        <i>Android Kotlin/Java (2 years)</i>
        <i>React/React Native (1 year)</i>
        <i>Javascript (1 year)</i>
        <i>Flutter (1 and a half year)</i>
      </ul>
      <Link href='/projects'>See my projects</Link>
    </div>
  );
}
