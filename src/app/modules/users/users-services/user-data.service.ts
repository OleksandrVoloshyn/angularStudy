import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay, Observable, throwError} from "rxjs";
import {map, catchError} from 'rxjs/operators'


import {IUser} from "../../../models";
import {urls} from "../../../constants";

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(urls.users)
    // .pipe(
    //   map(value => value),
    //   catchError((err) => throwError('err') )
    // )
  }

  getById(id: string): Observable<IUser> {
    return this.httpClient.get<IUser>(urls.users + '/' + id)
  }
}
