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
export class UserResolver implements Resolve<IUser> {
  constructor(private userDataService: UserDataService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> | Promise<IUser> | IUser {
    const user = this.router.getCurrentNavigation()?.extras?.state?.['data'];
    if (user) {
      return user
    }
    const {id} = route.params;
    return this.userDataService.getById(id);


  }

}
