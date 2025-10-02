export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  pictureUrl: string;
  dateOfBirth: string;
  sightingsNum: number;
}

export interface GenericResponse<T = unknown> {
  [key: string]: unknown;
  status: string;
  items: T[];
  message: string;
}

export interface IRegisterResponse {
  accessToken: string;
  refreshToken: string;
}
