import {Component, OnInit} from '@angular/core';

import {IUser} from "./interfaces";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: IUser

  constructor() {
  }

  ngOnInit(): void {
  }

  catch(user: IUser): void {
    console.log('app',user)
    this.user = user
  }
}
