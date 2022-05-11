import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IPost} from "../models/IPost";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url: string = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private httpClient: HttpClient) {
  }

  getAllPosts(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(this.url)
  }

  getPostById(id: string): Observable<IPost> {
    return this.httpClient.get<IPost>(this.url + '/' + id)
  }
}
