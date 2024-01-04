import { Routes } from '@angular/router';

import {UserListComponent} from './user-list/user-list.component';
import {UserAddComponent} from './user-add/user-add.component';
import {UserEditComponent} from './user-edit/user-edit.component';
import {UserDetailComponent} from './user-detail/user-detail.component';

export const routes: Routes = [	
	{ path: '', redirectTo: '/user', pathMatch: 'full' },
	{ path: 'user', component: UserListComponent },
	{ path: 'detail/:id', component: UserDetailComponent },
	{ path: 'edit/:id', component: UserEditComponent },
	{ path: 'add', component: UserAddComponent }
];
