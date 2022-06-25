import Header from '../components/Header';
import { UserContextProvider } from '../context/UserContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {

  return (
    <UserContextProvider>
      <Header />
      <Component {...pageProps} />
    </UserContextProvider>
  )
}

export default MyApp
