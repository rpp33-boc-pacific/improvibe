import '../styles/globals.css';
import type { AppProps } from 'next/app';
import AppContext from '../AppContext';
import songsObject from '../songsObject';
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <AppContext.Provider value={{user:Number(), songs: songsObject}}>
        <Component {...pageProps} />
      </AppContext.Provider>
    </SessionProvider>
  )
}

export default MyApp;
