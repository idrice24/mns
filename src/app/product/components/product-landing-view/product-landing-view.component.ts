import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ProductService } from 'src/app/shared/services/product.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product-landing-view',
  templateUrl: './product-landing-view.component.html',
  styleUrls: ['./product-landing-view.component.scss']
})
export class ProductLandingViewComponent implements OnInit {
  responsiveOptions;
  products: any;
  constructor(
    private productService: ProductService,
    private messageService: MessageService, // To invoke toast message
    private titleService: Title // Inject to set document title on  browser
  ) {
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
    this.productService.getProducts().subscribe(items =>
      this.products = items.slice(0, 11));
    this.titleService.setTitle('MNS237 - Product-landing-view'); // Adding the title Home to the MNS237  main Title
  }

  addToChart(product) {
    console.log(product.id);
    this.messageService.addAll([{ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' },
    { severity: 'info', summary: '@idrice Todo', detail: 'TODO' }]);
  }

}
