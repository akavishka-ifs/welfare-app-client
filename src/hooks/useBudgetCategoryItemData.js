import { useQuery } from "react-query";
import axios from "axios";

const fetchCategoryItems = () => {
  return axios.get("https://localhost:7115/budgetCategoryItems");
};

export const useGetAllCategoryItems= (onSuccess, onError) => {
    return useQuery("getAllBudgetCategoryItems", fetchCategoryItems, { onSuccess, onError });
  };