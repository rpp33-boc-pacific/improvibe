import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Player from '../components/shared/AudioPlayer';
import SongTile from '../components/shared/SongTile';
import NavigationBar from '../components/NavigationBar';
import LikeButton from '../components/shared/LikeButton';
import AddToProjects from '../components/shared/AddToProjects';
import HomePage from '../components/explorerPage/homePage';

const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="keywords" content="music, app, audio editing, social" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage/>
    </div>
  )
};

export default Home;
