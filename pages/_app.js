import '../styles/globals.css'
import { AppWrapper } from '../Data/AppWrapper'

function MyApp({ Component, pageProps }) {
  return (
    // <AppWrapper>
      <Component {...pageProps} />
    // </AppWrapper>
    )
}

export default MyApp
