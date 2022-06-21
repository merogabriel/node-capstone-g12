export interface IUser {
  id: string;
  name: string;
  email: string;
  isAdm: boolean;
  age: number;
  hired: Boolean;
  courses: [];
}

export interface IUserCreate {
  name: string;
  email: string;
  password: string;
  age: number;
  courses: string[];
  address: string;
}
export interface IUserUpdate {
  email: string;
  courses?: string[];
  address?: string;
}

export interface ILogin {
  email: string;
  password: string;
}
