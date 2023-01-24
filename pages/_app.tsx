import '../styles/main.scss'
import type { AppProps } from 'next/app'
import DefaultLayout from '../components/DefaultLayout'
import localFont from '@next/font/local'

const photoElyseeFont = localFont({
  src: [
    {
      path: './fonts/PhotoElysee-Bold.woff',
      weight: '900',
      style: 'normal',
    },
    {
      path: './fonts/PhotoElysee-Bold.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: './fonts/PhotoElysee-BoldItalic.woff',
      weight: '900',
      style: 'italic',
    },
    {
      path: './fonts/PhotoElysee-BoldItalic.woff2',
      weight: '900',
      style: 'italic',
    },
    {
      path: './fonts/PhotoElysee-DisplayBold.woff',
      weight: '900',
      style: 'normal',
    },
    {
      path: './fonts/PhotoElysee-DisplayBold.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: './fonts/PhotoElysee-DisplayBoldItalic.woff',
      weight: '900',
      style: 'italic',
    },
    {
      path: './fonts/PhotoElysee-DisplayBoldItalic.woff2',
      weight: '900',
      style: 'italic',
    },
    {
      path: './fonts/PhotoElysee-Italic.woff',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/PhotoElysee-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/PhotoElysee-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/PhotoElysee-Regular.woff',
      weight: '400',
      style: 'normal',
    },
  ],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout className={photoElyseeFont.className}>
      <Component {...pageProps} />
    </DefaultLayout>
  )
}
