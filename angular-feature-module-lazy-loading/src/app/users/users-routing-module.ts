import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Users } from './users';
import { UserDetail } from './user-detail/user-detail';

const routes: Routes = [
  { path: '', component: Users },
  { path: 'user/:id/detail', component: UserDetail }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
