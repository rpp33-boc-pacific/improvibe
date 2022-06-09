import { useState, useContext } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import AppContext from '../AppContext';
import songsObject from '../songsObject';
import userObject from '../userObject';
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {

  //Why is the session undefined?
console.log(SessionProvider);

  return (
    <SessionProvider session={session}>
      <AppContext.Provider value={{user: userObject, songs: songsObject}}>
        <Component {...pageProps} />
      </AppContext.Provider>
    </SessionProvider>
  )
}

export default MyApp;
