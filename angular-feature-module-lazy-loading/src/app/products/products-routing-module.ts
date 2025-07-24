import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Products } from './products';
import { ProductDetail } from './product-detail/product-detail';

const routes: Routes = [
  { path: '', component: Products },
  { path: 'product/:id/detail', component: ProductDetail },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
