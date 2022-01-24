import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';
 
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProtectedComponent } from './protected/protected.component';
import { UpdatepageComponent } from './updatepage/updatepage.component';
import { ExpiredComponent } from './expired.component';
import { UnauthorizedComponent } from './unauthorized.component';

const routes: Routes = [
  {
	path: '',
	component: AppComponent,
	canActivate: [AuthGuard],
	canActivateChild: [AuthGuard],
	children: [
	  { path: '', component: DashboardComponent },
	  { path: 'protected', component: ProtectedComponent },
	  { path: 'updatepage', component: UpdatepageComponent }
	]
  },
  { path: 'login', component: LoginComponent },
  { path: 'expired', component: ExpiredComponent },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
