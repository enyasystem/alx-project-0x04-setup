import type { AppProps } from 'next/app'
import Layout from '@/components/layouts/Layout'
import '@/styles/global.css'
import { CountProvider } from '@/context/CountContext'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CountProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CountProvider>
  )
}
