import type { AppProps } from 'next/app';
import { useContext } from 'react';
import Context from '../AppContext';
import HomePage from '../components/explorerPage/homePage';

function ExplorerPage({ Component, pageProps }: AppProps) {
  const userId = useContext(Context)
  console.log('context from explorer page', userId);
  return (
    <HomePage/>
  )
}

export default ExplorerPage;
