import { API } from "../services/axiosService";

export const getFlowersFunction = async (filters: {
  name?: string;
  latinName?: string;
  genus?: string;
  authorId?: string;
}) => {
  const response = await API.get<{ items: IFlower[] }>(
    `flowers`
    // ?name=${filters.name}&latinName=${filters.latinName}&genus=${filters.genus}&autorId=${filters.authorId}
  );
  return response.data;
};

export const getSightingsFunction = async (filters: {
  description?: string;
  name?: string;
  flowerId?: string;
  authorId?: string;
}) => {
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
