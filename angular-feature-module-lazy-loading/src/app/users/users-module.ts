import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing-module';
import { Users } from './users';
import { UserDetail } from './user-detail/user-detail';


@NgModule({
  declarations: [
    Users,
    UserDetail
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
