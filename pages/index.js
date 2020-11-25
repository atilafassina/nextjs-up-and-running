import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Website 🔥</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <header className={styles.container}>
          <h1 className={styles.title}>Next Website 🔥</h1>
        </header>
      </main>
    </>
  );
}
