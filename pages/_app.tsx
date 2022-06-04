import '../styles/globals.css';
import type { AppProps } from 'next/app';
import AppContext from '../AppContext';
import songsObject from '../songsObject';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContext.Provider value={{user:Number(), songs: songsObject}}>
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp;
