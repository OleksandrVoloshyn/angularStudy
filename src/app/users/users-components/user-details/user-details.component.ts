import {Component, OnInit} from '@angular/core';

import {IUser} from "../../../models";
import {UserDataService} from "../../users-services/user-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetailsObj: IUser;

  constructor(private userDataService: UserDataService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const user = history.state?.data
      if (user) {
        this.userDetailsObj = user
      } else {
        this.userDataService.getById(id).subscribe(value => this.userDetailsObj = value)
      }
    })
  }

}
