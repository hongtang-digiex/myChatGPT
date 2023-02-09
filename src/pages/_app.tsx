import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  // @ts-ignore
  return <><Component {...pageProps} />;
  </>

}
