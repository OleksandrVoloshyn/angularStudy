import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';

import {IUser} from "../../../../models";
import {UserDataService} from "../user-data.service";

@Injectable({
  providedIn: 'root'
})
export class UsersResolver implements Resolve<IUser[]> {
  constructor(private userDataService: UserDataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser[]> | Promise<IUser[]> | IUser[] {
    return this.userDataService.getAll();
  }

}
