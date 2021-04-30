import { useEffect, useRef, useState } from 'react';
import { API_ML_SEARCH } from '../services/ml-api.service';

const useSearch = (query) => {
  const componentIsMounted = useRef(true);
  const [state, setState] = useState({
    data: null,
    error: null,
    loading: true,
  });

  useEffect(
    () => () => {
      componentIsMounted.current = false;
    },
    []
  );

  useEffect(() => {
    setState({
      // Reset State
      data: null,
      error: null,
      loading: true,
    });

    API_ML_SEARCH.searchQuery(query)
      .then((data) => {
        console.log('ml_search.service.js', data);
        setState({
          data,
          loading: false,
          error: null,
        });
      })
      .catch((error) => {
        setState({
          data: null,
          loading: false,
          error,
        });
      });
  }, [query]);

  return state;
};

export default useSearch;
