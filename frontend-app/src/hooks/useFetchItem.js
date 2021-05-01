import { useEffect, useRef, useState } from 'react';
import { API_ML_ITEMS } from '../services/ml-api.service';

const useFetchItem = (productId) => {
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

    API_ML_ITEMS.getItem(productId)
      .then((data) => {
        setState({
          data: data.data,
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
  }, [productId]);

  return state;
};

export default useFetchItem;
