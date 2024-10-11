import { useEffect, useState } from "react";
import { productsApi } from "../api/productsApi";

export const useGetData = (id = null) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);

        const endpoint = id ? `${productsApi}/${id}` : productsApi;
        const response = await fetch(endpoint);
        const json = await response.json();
        const { data } = json;
        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
        setIsError(true);
      }
    };

    getData();
  }, [id]);

  return { data, isLoading, isError };
};
