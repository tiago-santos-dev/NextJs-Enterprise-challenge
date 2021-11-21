import { AppProps } from 'next/app'

import { GlobalStyle } from '@styles/global'
import Header from '@components/Header'

const MyApp = function ({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
