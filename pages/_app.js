import { useState, useEffect } from 'react';
import '../styles/globals.css';
// import type { AppProps } from 'next/app';
import AppContext from '../AppContext';
import { SessionProvider } from "next-auth/react";
import axios from 'axios';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [user, setUser] = useState({});
  const [songs, setSongs] = useState([]);
  const value = { user, setUser , songs, setSongs};
  const { id } = user;

  useEffect(() => {
    if (Object.keys(user).length) {
      axios.get(`/api/user/${id}`)
      .then((response) => {
        setSongs(response.data.songs);
      })
      .catch((err) =>{
        console.log(err)
      })
    }
  }, [user])

  return (
    <SessionProvider session={session}>
      <AppContext.Provider value={value}>
        <Component {...pageProps} />
      </AppContext.Provider>
    </SessionProvider>
  )
}

export default MyApp;
