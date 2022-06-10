import { useState, useContext } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import AppContext from '../AppContext';
import songsObject from '../songsObject';
import userObject from '../userObject';
import { SessionProvider } from "next-auth/react";
import { useState } from 'react';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
<<<<<<< HEAD
  const [user, setUser] = useState({});
  const value = { user, setUser };

  return (
    <SessionProvider session={session}>
      <AppContext.Provider value={value}>
=======

  //Why is the session undefined?
console.log(SessionProvider);

  return (
    <SessionProvider session={session}>
      <AppContext.Provider value={{user: userObject, songs: songsObject}}>
>>>>>>> 80732d17301976f7446d5f8256528d594c625e2b
        <Component {...pageProps} />
      </AppContext.Provider>
    </SessionProvider>
  )
}

export default MyApp;
