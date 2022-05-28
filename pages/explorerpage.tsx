import type { AppProps } from 'next/app';
import HomePage from '../components/explorerPage/homePage';

function ExplorerPage({ Component, pageProps }: AppProps) {
  return (
    <HomePage/>
  )
}

export default ExplorerPage;
