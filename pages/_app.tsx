import "@/styles/globals.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import type { AppProps } from "next/app"
import Layout from "@/components/Layout"
import { Inter } from "next/font/google"
import { Provider } from "react-redux"
import { store, persistor } from "@/redux/store"
import { PersistGate } from "redux-persist/integration/react"
import { SessionProvider } from "next-auth/react"

const inter = Inter({ subsets: ["latin"], variable: "--inter-sans" })

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <PersistGate
          loading={"loading"}
          persistor={persistor}
        >
          <main className={`${inter.variable} font-sans`}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </main>
        </PersistGate>
      </SessionProvider>
    </Provider>
  )
}
