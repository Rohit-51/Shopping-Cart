import { CartProvider } from '../components/store/CartContext'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  ) 
}

export default MyApp
