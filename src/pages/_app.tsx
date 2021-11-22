import GlobalStyle from '../styles/globals';

import Menu from '@/components/Menu';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Menu />
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default MyApp
