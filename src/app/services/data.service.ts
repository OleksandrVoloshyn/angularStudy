import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IUser} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  storage = new BehaviorSubject<IUser>({id: '0', name: '', email: ''})

  constructor() {
  }
}
