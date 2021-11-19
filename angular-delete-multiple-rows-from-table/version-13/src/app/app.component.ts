import { Component, OnInit } from '@angular/core';

import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	msg: string = '';
	clss: string = '';
	products: Product[] = [];
	
	constructor(private productService: ProductService) { }
	
	ngOnInit() {
		this.getProducts();
	}
	
	getProducts(): void {
		this.productService.getProducts().subscribe(products => this.products = products);
	}
	
	checkAllCheckBox(ev: any) {
		this.products.forEach(x => x.checked = ev.target.checked)
	}

	isAllCheckBoxChecked() {
		return this.products.every(p => p.checked);
	}
	
	deleteProducts(): void {
		const selectedProducts = this.products.filter(product => product.checked).map(p => p.id);
		//console.log (selectedProducts);
		
		if(selectedProducts && selectedProducts.length > 0) {
			this.productService.deleteProducts(selectedProducts as number[])
				.subscribe(res => {
					this.clss = 'grn';
					this.msg = 'Products successfully deleted';
					}, err => {
                        this.clss = 'rd';
						this.msg = 'Something went wrong during deleting products';
                    }
                );
		} else {
			this.clss = 'rd';
			this.msg = 'You must select at least one product';
		}
	}
}
