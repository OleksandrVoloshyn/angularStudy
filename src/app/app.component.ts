import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    if(this.authService.isAuthorization()){
      this.router.navigate(['cars'])
    }
  }
}
