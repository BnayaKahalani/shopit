import "@/styles/globals.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import type { AppProps } from "next/app"
import Layout from "@/components/Layout"
import { Inter } from "next/font/google"
import { Provider } from "react-redux"
import { store } from "@/redux/store"

const inter = Inter({ subsets: ["latin"], variable: "--inter-sans" })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <main className={`${inter.variable} font-sans`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </Provider>
  )
}
