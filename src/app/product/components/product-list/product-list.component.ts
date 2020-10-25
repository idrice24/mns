import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  recentPosts: Product[];
  sortOptions: SelectItem[];
  sortKey: SelectItem;
  sortOrder: number;
  sortField: string;

  constructor( private productService: ProductService) { }

  ngOnInit(): void {
    this.listProducts();
    this.loadRecentPosts();
    this.sortOptions = [
      { label: 'Produits', value: '!price' },
      { label: 'Products', value: 'price' }
    ];
    this.sortKey = this.sortOptions[0];
  }

  onSortChange(event) {
    const value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  listProducts() {
    this.productService.getProductList().subscribe(data => {
      this.products = data;
      this.recentPosts = this.products.slice(0, 3);
    });
  }

  private loadRecentPosts() {

  }

}
