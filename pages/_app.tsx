import { useState } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import AppContext from '../AppContext';
import songsObject from '../songsObject';
import userObject from '../userObject';
import { SessionProvider } from "next-auth/react";

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
