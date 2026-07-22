import { SessionProvider } from 'next-auth/react'
import '../src/stylesheets/base.scss'
import '../src/common'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
