import { AppProps } from 'next/app'

import GlobalStyle from '@styles/global'

const MyApp = function ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default MyApp
