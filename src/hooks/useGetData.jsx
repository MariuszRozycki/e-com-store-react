import { useEffect, useState } from "react";
import { productsApi } from "../api/productsApi";

export const useGetData = () => {
  const [products, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetch(productsApi);
        const json = await response.json();
        // console.log(json);
        const { data } = json;

        setPosts(data);
        setIsLoading(false);
      } catch (error) {
        // here goes function to render error!
        console.error(error);
        setIsLoading(false);
        setIsError(true);
      }
    };

    getData();
  }, []);

  return { products, isLoading, isError };
};
