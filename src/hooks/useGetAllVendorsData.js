import { useQuery } from "react-query";
import axios from "axios";

const fetchVendors = () => {
  return axios.get("https://localhost:7115/vendors");
};

export const useGetAllVendorsData = (onSuccess, onError) => {
  return useQuery("getAllVendors", fetchVendors, { onSuccess, onError });
};
