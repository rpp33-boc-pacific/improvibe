import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Player from './components/player';

const Home: NextPage = () => {


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="keywords" content="music, app, audio editing, social" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to improvibe!
        </h1>
        <Player />
      </main>
    </div>
  )
};

export default Home;
