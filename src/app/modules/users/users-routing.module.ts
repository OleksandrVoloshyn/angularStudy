import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

import {UsersComponent} from "./users-components/users/users.component";
import {UserDetailsComponent} from "./users-components/user-details/user-details.component";
import {UserResolver, UsersResolver} from "./users-services";
import {UserGuard} from "./users-services";

const routes: Routes = [
  {
    path: '', component: UsersComponent,
    resolve: {usersData: UsersResolver},
    canActivate: [UserGuard],
    canDeactivate: [UserGuard],
    children: [
      {path: ':id', component: UserDetailsComponent, resolve: {userData: UserResolver}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
