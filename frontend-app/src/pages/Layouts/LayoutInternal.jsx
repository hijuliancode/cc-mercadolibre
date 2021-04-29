import React from 'react'
import { Footer } from '../../components/shared/Footer'
import { Header } from '../../components/shared/Header'

export const LayoutInternal = ({ children }) => {
  return (
    <>
     <Header />
     <main className="main d-flex pt-8 pb-8">
       {children}
     </main>
     <Footer />
    </>
  )
}
