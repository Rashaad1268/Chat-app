// import '../styles/globals.css'
// import '../styles/navigation.css'
// import '../styles/login.css'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
