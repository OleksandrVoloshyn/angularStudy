import {IUser} from "./user.interface";

export interface IUserDetails extends IUser {
  username: string,
  email: string
}
