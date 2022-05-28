import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Player from '../components/shared/AudioPlayer';
import SongTile from '../components/shared/SongTile';
import SearchAppBar from '../components/SearchBar';
import Player from '../components/reusable/AudioPlayer';
import LikeButton from '../components/reusable/LikeButton';
import AddToProjects from '../components/reusable/AddToProjects';

const Home: NextPage = () => {


  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="keywords" content="music, app, audio editing, social" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchAppBar/>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to improvibe!
        </h1>
        <SongTile />
      </main>
    </div>
  )
};

export default Home;
