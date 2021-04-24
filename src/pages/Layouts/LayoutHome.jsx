import React from 'react'
import { Box } from '../../components/Box'

export const LayoutHome = ({ children }) => {
  return (
    <>
      <main className="main main--home">
        <div className="wrapper--home">
          <Box>
            {children}
          </Box>
        </div>
      </main>
    </>
  )
}
