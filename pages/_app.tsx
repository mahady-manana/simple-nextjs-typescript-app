import '../styles/globals.css';
import Head from 'next/head';
import { Headers, theme } from '../components/commons';
import { ThemeProvider } from '@material-ui/core/styles';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Headers />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
export default MyApp;
