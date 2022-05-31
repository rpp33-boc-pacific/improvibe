import '../styles/globals.css';
import type { AppProps } from 'next/app';
import AppContext from '../AppContext';
import user from '../userObject';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContext.Provider value={user}>
        <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp;
