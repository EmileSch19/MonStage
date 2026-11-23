import '@/styles/globals.css'
// Police Bebas Neue auto-hébergée (plus de requête bloquante vers Google Fonts)
import '@fontsource/bebas-neue/400.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
