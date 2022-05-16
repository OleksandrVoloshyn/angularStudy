import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Navigation, Router} from "@angular/router";
import {UserService} from "../../services";
import {IUserDetails} from "../../models";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetailsObj: IUserDetails;

  constructor(private activatedRoute: ActivatedRoute, private router:Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      const {state:{data}} = history;
      this.userDetailsObj = data as IUserDetails
    })
  }

}
