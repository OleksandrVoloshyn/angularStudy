import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "./app-components/home/home.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', loadChildren: () => import('./modules').then(m => m.UsersModule)},
  {path: 'posts', loadChildren: () => import('./modules').then(m => m.PostsModule)},
  {path: 'comments', loadChildren: () => import('./modules').then(m => m.CommentsModule)}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
