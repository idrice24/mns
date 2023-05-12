import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ProductService } from 'src/app/shared/services/product.service';
import { Title } from '@angular/platform-browser';
import { Product } from 'src/app/shared/models/product';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-product-category-view',
	templateUrl: './product-category.component.html',
	styleUrls: ['./product-category.component.scss']
})

export class ProductCategoryComponent implements OnInit {
	
	products$: Observable<Product[]>; // @Idirce see stocts$ in p.
  	products: Product[];
  	responsiveOptions;

  	constructor(
  		private productService: ProductService,
  		private messageService: MessageService // To invoke toast message
  		){
  		this.responsiveOptions = [
			{
			breakpoint: '1024px',
			numVisible: 3,
			numScroll: 3
			},
			{
			breakpoint: '768px',
			numVisible: 2,
			numScroll: 2
			},
			{
			breakpoint: '560px',
			numVisible: 1,
			numScroll: 1
			}
    ];
  	}
	ngOnInit(): void {
		this.products$ = this.productService.getProducts();
	}
	addToChart(product) {
    console.log(product.id);
    this.messageService.addAll([{ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' },
    { severity: 'info', summary: '@idrice Todo', detail: 'TODO' }]);
  }
}