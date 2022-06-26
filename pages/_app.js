import ComponentLoader from '../components/ComponentLoader';
import { UserContextProvider } from '../context/UserContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {

  return (
    <UserContextProvider>
      <ComponentLoader 
        Component={() => <Component {...pageProps} />}
      />
    </UserContextProvider>
  )
}

export default MyApp
