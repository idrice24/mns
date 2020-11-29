import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-landing-view',
  templateUrl: './product-landing-view.component.html',
  styleUrls: ['./product-landing-view.component.scss']
})
export class ProductLandingViewComponent implements OnInit {
  responsiveOptions;
  products: any;
  constructor(private productService: ProductService) {
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
    this.productService.getProducts().subscribe(items => this.products = items);
  }

}
