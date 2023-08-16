import "@/styles/globals.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import type { AppProps } from "next/app"
import Layout from "@/components/Layout"
import { Inter } from "next/font/google"
import { Provider } from "react-redux"
import { store, persistor } from "@/redux/store"
import { PersistGate } from "redux-persist/integration/react"
import Image from "next/image"
import loader from "../public/assets/images/loader.gif"
// import { SessionProvider } from "next-auth/react"

const inter = Inter({ subsets: ["latin"], variable: "--inter-sans" })

export default function App({ Component, pageProps: { ...pageProps } }: AppProps) {
  return (
    <Provider store={store}>
      {/* <SessionProvider session={session}> */}
      <PersistGate
        loading={
          <div className='text-center'>
            <Image
              src={loader}
              width={400}
              height={400}
              alt='Loading...'
            />
          </div>
        }
        persistor={persistor}
      >
        <main className={`${inter.variable} font-sans`}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
      </PersistGate>
      {/* </SessionProvider> */}
    </Provider>
  )
}
