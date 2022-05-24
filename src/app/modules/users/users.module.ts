import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {UsersComponent} from './users-components/users/users.component';
import {UsersRoutingModule} from './users-routing.module';
import {UserDataService, UserGuard, UserResolver} from "./users-services";
import {UserComponent} from './users-components/user/user.component';
import {UserDetailsComponent} from './users-components/user-details/user-details.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ],
  providers: [UserDataService, UserResolver, UserGuard]
})
export class UsersModule {
}
