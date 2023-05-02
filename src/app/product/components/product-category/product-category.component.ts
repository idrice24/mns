import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ProductService } from 'src/app/shared/services/product.service';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-product-category-view',
	templateUrl: './product-category.component.html',
	styleUrls: ['./product-category.component.scss']
})

export class ProductCategoryComponent implements OnInit {
	products: any;
	ngOnInit(): void {}
}