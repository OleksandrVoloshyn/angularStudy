import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IUser} from "../../../../models";
// import {UserDataService} from "../../users-services";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetailsObj: IUser;

  // constructor(private userDataService: UserDataService, private activatedRoute: ActivatedRoute) {
  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(({id}) => {
    //   const user = history.state?.data
    //   if (user) {
    //     this.userDetailsObj = user
    //   } else {
    //     this.userDataService.getById(id).subscribe(value => this.userDetailsObj = value)
    //   }
    // })
    this.activatedRoute.data.subscribe(({userData}) => this.userDetailsObj = userData)
  }

}
