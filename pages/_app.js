import '../styles/globals.css';
import { StoreProvider } from '../utils/Store';
import {SessionProvider} from 'next-auth/react';
function MyApp({ Component, pageProps }) {
  return <SessionProvider>
    <StoreProvider session={pageProps.session}>
    <Component {...pageProps} />
    </StoreProvider>
  </SessionProvider>
  
}

export default MyApp
