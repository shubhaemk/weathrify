import { useState } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';

const useFetchData = (service, ...args) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const dataFetchSuccess = (data) => {
    setData(data);
    setLoading(false);
  };

  const dataFetchFailure = (error) => {
    setError(error);
    setLoading(false);
  };

  useDeepCompareEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);
  }, [args]);

  useDeepCompareEffect(() => {
    (async () => {
      try {
        const data = await service(...args);
        dataFetchSuccess(data);
      } catch (error) {
        dataFetchFailure(error || { message: 'error fetching data' });
      }
    })();
  }, [service, args]);

  return [isLoading, data, error];
};

export default useFetchData;
