import React, { ReactElement } from "react"
import Navbar from "./Navbar"
import TopFooter from "./TopFooter"
import Footer from "./Footer"

interface Props {
  children: ReactElement
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main>
        {children}
        <TopFooter />
        <Footer />
      </main>
    </>
  )
}

export default Layout
