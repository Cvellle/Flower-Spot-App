import { API } from "../services/axiosService";

export const getFlowersFunction = async () => {
  const response = await API.get<{ items: IFlower[] }>(`flowers`);
  return response.data;
};

export const getSightingsFunction = async () => {
  const response = await API.get<IFlower[]>(`sightings`);
  return response.data;
};

export const addNewSightingFn = async (payload: {
  flowerId: string;
  name: string;
  description: string;
  latitude: number;
  longitude: number;
}) => {
  const response = await API.post<any>(`account/sightings`, payload);
  return response.data;
};

export const addCommentFn = async (payload: {
  sightingId: string;
  body: { content: string };
}) => {
  const response = await API.post<{
    id: string;
    content: string;
    authorId: string;
  }>(`/account/sightings/${payload.sightingId}/comments`, payload.body);
  return response.data;
};
