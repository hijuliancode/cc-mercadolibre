import React from 'react'
import { useLocation } from 'react-router-dom'
import { useSearch } from '../../hooks/useSearch'
import { LayoutInternal } from '../Layouts/LayoutInternal'

export const Results = () => {
  const location = useLocation()
  const query = new URLSearchParams(location.search)
  const searchQuery = query.get('search')
  const searchResults = useSearch(searchQuery)

  console.log('searchResults', searchResults);

  return (
    <LayoutInternal>
     <h1>Results</h1> 

    { searchResults.loading ?
        <p>loading...</p>
      :
      <p>Done!</p>
    }

    </LayoutInternal>
  )
}
