export interface IUser {
  [key: string]: any;
  firstName: string;
  lastName: string;
  email: string;
  photo: string;
  id: string;
}

export interface GenericResponse {
  [key: string]: any;
  status: string;
  items: any[];
  message: string;
}

export interface ILoginResponse {
  accessToken: string;
  refreshToken: string;
}

export interface IUserResponse {
  status: string;
  data: {
    user: IUser;
  };
}
