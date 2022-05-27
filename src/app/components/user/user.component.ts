import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {IUser} from "../../interfaces";
import {DataService} from "../../services";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: IUser;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
  }

  saveToStorage() {
this.dataService.storage.next(this.user)
  }
}
