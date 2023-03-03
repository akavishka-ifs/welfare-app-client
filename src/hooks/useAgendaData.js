import { useQuery, useMutation } from "react-query";
import axios from "axios";

const fetchEvents = () => {
  return axios.get("https://localhost:7115/eventAgenda/GetEventAgendaByTripID/1");
};

const addEvent = (event) => {
  return axios.post("https://localhost:7115/eventAgenda/AddEvent",event);
}

const updateEvent = (event) => {
  return axios.put(`https://localhost:7115/eventAgenda/UpdateEvent/${event.eventID}`, event);
}

const deleteEvent = (event) => {
  console.log(event.eventID);
  return axios.post(`https://localhost:7115/eventAgenda/RemoveEvent/${event.eventID}`);
}

// *****************************

export const useGetAllEvents= (onSuccess, onError) => {
  return useQuery("getAllEvents", fetchEvents,{ onSuccess, onError, refetchInterval : 5000 });
};

export const useAddEvent = (onSuccess, onError) => {
  return useMutation("addEvent",  addEvent, {onSuccess, onError});
}

export const useUpdateEvent = (onSuccess, onError) => {
  return useMutation("updateEvent",  updateEvent, {onSuccess, onError});
}

export const useDeleteEvent = (onSuccess, onError) => {
  return useMutation("deleteEvent",  deleteEvent, {onSuccess, onError});
}