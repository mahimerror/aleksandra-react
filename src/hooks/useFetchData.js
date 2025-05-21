import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchData = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

const useFetchData = (endpoint) => {
  return useQuery({
    queryKey: [endpoint],
    queryFn: () => fetchData(endpoint),
  });
};

export default useFetchData;
