import '../styles/globals.css';
import type { AppProps } from 'next/app';
import AppContext from '../AppContext';
import songsObject from '../songsObject';
import { SessionProvider } from "next-auth/react";
import { useState } from 'react';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [user, setUser] = useState({});
  const value = { user, setUser };

  return (
    <SessionProvider session={session}>
      <AppContext.Provider value={value}>
        <Component {...pageProps} />
      </AppContext.Provider>
    </SessionProvider>
  )
}

export default MyApp;
