import '../styles/main.scss'
import type { AppProps } from 'next/app'
import DefaultLayout from '../components/DefaultLayout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  )
}
