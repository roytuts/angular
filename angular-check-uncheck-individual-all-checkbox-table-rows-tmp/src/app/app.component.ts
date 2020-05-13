import { Component, OnInit } from '@angular/core';

import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	products: Product[] = [];
	
	constructor(private productService: ProductService) { }
	
	ngOnInit() {
		this.getProducts();
	}
	
	getProducts(): void {
		this.productService.getProducts().subscribe(products => this.products = products);
	}
	
	checkAllCheckBox(ev) {
		this.products.forEach(x => x.checked = ev.target.checked)
	}

	isAllCheckBoxChecked() {
		return this.products.every(p => p.checked);
	}
}
