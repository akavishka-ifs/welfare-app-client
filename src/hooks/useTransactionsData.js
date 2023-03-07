import { useQuery, useMutation } from "react-query";
import axios from "axios";

const fetchTransactions = () => {
  return axios.get("https://localhost:7115/transactions");
};

const addTransaction = (transaction) => {
  return axios.post("https://localhost:7115/transactions",transaction);
}

export const useGetAllTransactions= (onSuccess, onError) => {
  return useQuery("GetAllTransactions", fetchTransactions, { onSuccess, onError });
};

export const useAddTransactions = (onSuccess, onError) => {
  return useMutation("addTransaction",  addTransaction, {onSuccess, onError});
}
