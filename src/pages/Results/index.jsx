import React from 'react'
import { useLocation } from 'react-router-dom'
import { useSearch } from '../../hooks'

import { LayoutInternal } from '../Layouts/LayoutInternal'
import { Alert, Box, CardResult, Container } from '../../components'

export const Results = () => {
  const location = useLocation()
  const query = new URLSearchParams(location.search)
  const searchQuery = query.get('search')
  const { data:results, loading } = useSearch(searchQuery)

  return (
    <LayoutInternal>
      <Container className="d-flex">
        <Box className="radius-xm">
          {
            loading ?
            <Alert className="mt-6 ml-auto mr-auto" width="auto" align="center" type="light">Cargando..</Alert>
            :
            results.map((elm) => (
              <CardResult key={elm.id} product={elm} />
            ))
          }
        </Box>
      </Container>
    </LayoutInternal>
  )
}
