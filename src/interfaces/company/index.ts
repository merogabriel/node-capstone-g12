import { string } from "yup";

export interface ICompany {
  id: string;
  name: string;
  cnpj: string;
}

export interface ICompanyCreate {
  name: string;
  cnpj: string;
  password: string;
  state: string;
}

export interface ILoginCompany {
  cnpj: string;
  password: string;
}
