import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WebsiteListComponent } from './website-list/website-list.component';
import { WebsiteAddComponent } from './website-add/website-add.component';
import { WebsiteEditComponent } from './website-edit/website-edit.component';
import { WebsiteDetailComponent } from './website-detail/website-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/website', pathMatch: 'full' },
  { path: 'website', component: WebsiteListComponent },
  { path: 'detail/:id', component: WebsiteDetailComponent },
  { path: 'edit/:id', component: WebsiteEditComponent },
  { path: 'add', component: WebsiteAddComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}