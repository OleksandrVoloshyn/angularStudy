import {ICompany} from "./company.interface";

export interface IUser {
  id:string,
  name: string,
  company:ICompany
}
