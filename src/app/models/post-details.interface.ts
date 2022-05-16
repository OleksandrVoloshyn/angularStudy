import {IPost} from "./post.interface";

export interface IPostDetails extends IPost{
  userId:string,
  body:string
}
