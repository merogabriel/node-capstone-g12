export interface ICompany {
  id: string;
  name: string;
  cnpj: string;
}

export interface ICompanyCreate {
  name: string;
  cnpj: string;
  password: string;
}

export interface ILoginCompany {
  cnpj: string;
  password: string;
}
