import { useEffect, useState } from "react";

const useQuery = (promise) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await promise();
      setData(res.data?.data?.courses || []);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return {
    data,
    loading,
    error,
  };
};
export default useQuery;
