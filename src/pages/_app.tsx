import { AppProps } from 'next/app'

import GlobalStyle from '@styles/global'
import Header from '@components/Header'
import { EnterpriseProvider } from '@hooks/useEnterprise'

const MyApp = function ({ Component, pageProps }: AppProps) {
  return (
    <EnterpriseProvider>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </EnterpriseProvider>
  )
}

export default MyApp
