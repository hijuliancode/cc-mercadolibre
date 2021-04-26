import { useEffect, useRef, useState } from 'react'
import { API_ML_ITEMS } from '../services/ml-api.service'

export const useFetchItem = (productId) => {
  const componentIsMounted = useRef(true)
  const [ state, setState ] = useState({
    data: null,
    error: null,
    loading: true,
  })

  useEffect(() => {
    return () => {
      componentIsMounted.current = false
    }
  }, [])

  useEffect(() => {
    setState({ // Reset State
      data: null,
      error: null,
      loading: true,
    })

    API_ML_ITEMS.getItem(productId)
      .then(data => {
        console.log('ml_search.service.js', data)
        setState({
          data: data.data, 
          loading: false,
          error: null,
        })
      })
      .catch(error => {
        setState({
          data: null,
          loading: false,
          error
        })
      })
  }, [productId])

  return state
}