import {Component, OnInit} from '@angular/core';
import {DataService} from "./services";
import {IUser} from "./interfaces";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: IUser;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.storage.subscribe(value => this.user = value)
  }
}
