import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
// import SongTile from '../components/shared/SongTile.tsx';
import SearchAppBar from '../components/SearchBar';
import LikeButton from '../components/shared/LikeButton';
import AddToProjects from '../components/shared/AddToProjects';

const Home: NextPage = () => {


  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="keywords" content="music, app, audio editing, social" />
        <link rel="icon" href="/favicon.ico" />
        <script async type="text/javascript" src="../public/newrelic.js" />
      </Head>
      <SearchAppBar/>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to improvibe!
        </h1>
      </main>
    </div>
  )
};

export default Home;
