import React from 'react'
import { Footer } from '../../components/shared/Footer'
import { Header } from '../../components/shared/Header'

export const LayoutMain = ({ children }) => {
  return (
    <>
     <Header />
     <main className="main">{children}</main>
     <Footer />
    </>
  )
}
