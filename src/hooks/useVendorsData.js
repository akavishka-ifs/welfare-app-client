import { useQuery, useMutation } from "react-query";
import axios from "axios";

const fetchVendors = () => {
  return axios.get("https://localhost:7115/vendors");
};

const addVendor = (vendor) => {
  return axios.post("https://localhost:7115/vendors",vendor);
}

const updateVendor = (vendor) => {
  return axios.put(`https://localhost:7115/vendors/${vendor.vendorId}`,vendor);
}

const deleteVendor = (vendor) => {
  return axios.delete(`https://localhost:7115/vendors/${vendor.vendorId}`);
}

export const useGetAllVendors= (onSuccess, onError) => {
  return useQuery("getAllVendors", fetchVendors, { onSuccess, onError });
};

export const useAddVendor = (onSuccess, onError) => {
  return useMutation("addVendor",  addVendor, {onSuccess, onError});
}

export const useUpdateVendor = (onSuccess, onError) => {
  return useMutation("updateVendor",  updateVendor, {onSuccess, onError});
}

export const useDeleteVendor = (onSuccess, onError) => {
  return useMutation("deleteVendor",  deleteVendor, {onSuccess, onError});
}