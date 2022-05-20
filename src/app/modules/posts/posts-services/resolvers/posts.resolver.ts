import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';

import {IPost} from "../../../../models";
import {PostsDataService} from "../posts-data.service";

@Injectable({
  providedIn: 'root'
})
export class PostsResolver implements Resolve<IPost[]> {
  constructor(private postsDataService: PostsDataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPost[]> | Promise<IPost[]> | IPost[] {
    return this.postsDataService.getAll();
  }

}
