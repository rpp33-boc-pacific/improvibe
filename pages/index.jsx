import { NextPage } from 'next';
import { useContext } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Player from '../components/shared/AudioPlayer';
import SongTile from '../components/shared/SongTile';
import NavigationBar from '../components/NavigationBar';
import LikeButton from '../components/shared/LikeButton';
import AddToProjects from '../components/shared/AddToProjects';
import HomePage from '../components/explorerPage/homePage';
import AppContext from '../AppContext';
import { getSession } from 'next-auth/react';

const Home = (props) => {
  const {user, setUser} = useContext(AppContext);
  setUser(props.user);
  // console.log('props', props);

  return (
    <div>
      <Head>
        <title>Improvibe</title>
        <meta name="keywords" content="music, app, audio editing, social" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage/>
    </div>
  )
};

export async function getServerSideProps (AppContext) {
  const { req, res } = AppContext;
  const session = await getSession({ req });
  if (!session) {
    res.writeHead(302, {
      Location: "/logIn",
    });
    res.end();
    return;
  }
  return { props: session };
};

export default Home;
