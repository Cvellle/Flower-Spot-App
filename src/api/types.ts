export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  pictureUrl: string;
  dateOfBirth: string;
  sightingsNum: number;
}

export interface GenericResponse {
  [key: string]: any;
  status: string;
  items: any[];
  message: string;
}

export interface IRegisterResponse {
  accessToken: string;
  refreshToken: string;
}
