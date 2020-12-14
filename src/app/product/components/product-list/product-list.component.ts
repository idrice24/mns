
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService, SelectItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/product';
import { MissionService } from 'src/app/shared/services/mission.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  // To store products from DB
  products$: Observable<Product[]>; // @Idirce see stocts$ in p.
  products: Product[];
  recentPosts: Product[];
  sortOptions: SelectItem[];
  sortKey: SelectItem;
  sortOrder: number;
  sortField: string;

  constructor(
    private router: Router,
    private missionService: MissionService, // Notify extern conponent i.e  header fot cart
    private messageService: MessageService,
    private productService: ProductService) { }

  ngOnInit(): void {
    // Get a list of products from DB
    this.products$ = this.productService.getProducts();

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

  // Logic to add a product in Cart
  addToChart(product: Product) {
    const msg = product.id;
    console.log("XXXXXXXXXXXXXXXXX");
    this.missionService.addingOrRemoving(true);
    console.log("XXXXXXXXXXXXXXXXX22222222222");

    // this.router.navigate(['/shoppings']);
    // TODO@Idrice: Missing logic to add to Chart
    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product add to chart ID=' + msg, life: 6000 });

  }




}
