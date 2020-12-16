import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Topic} from '../../../shared/models/topic';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class ManageProductComponent implements OnInit {
  productDialog: boolean;

  productPost: boolean; // this is to open the add product form

  products: Product[];

  product: Product = {};

  selectedProducts: Product[];

  submitted: boolean;

  productForm: FormGroup;

  constructor(
    private productService: ProductService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService) { }

      // convenience getter for easy access to form fields
    get code() {return this.productForm.get('code'); }
    get price() { return this.productForm.get('price'); }
    get category() {return this.productForm.get('category'); }
    get content() {return this.productForm.get('content'); }
    get inventoryStatus() {return this.productForm.get('inventoryStatus'); }
    get description() { return this.productForm.get('description'); }
    get title() {return this.productForm.get('title'); }
    get summary() {return this.productForm.get('summary'); }
    get image() {return this.productForm.get('image'); }

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      console.log(data[0].name);
    });

    this.productForm = new FormGroup({
      title: new FormControl('', [ Validators.required, ]),
      content: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      inventoryStatus: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
    });
  }

  openNew() {
    this.product = {};
    this.submitted = false;
    this.productPost = true;
    this.messageService.add({life: 1000});
  }

  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products = this.products.filter(val => !this.selectedProducts.includes(val));
        this.selectedProducts = null;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
      }
    });
  }

  editProduct(product: Product) {
    this.product = { ...product };
    this.productDialog = true;
  }

  deleteProduct(product: Product) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + product.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products = this.products.filter(val => val.id !== product.id);
        this.product = {};
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
      }
    });
  }

  hideDialog() {
    this.submitted = false;
    this.productDialog = false;
  }

  saveProduct() {
    this.submitted = true;

    if (this.product.name.trim()) {
      if (this.product.id) {
        this.products[this.findIndexById(this.product.id)] = this.product;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 1000 });
      }
      else {
        this.product.id = 1;
        this.product.image = 'product-placeholder.svg';
        this.products.push(this.product);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 1000 });
      }

      this.products = [...this.products];
      this.productDialog = false;
      this.product = {};
    }
  }

  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }
// Save to data base this user information
  doSubscription(){

  const currentAppProduct: Product = {
    title: this.title.value,
    content: this.content.value,
    image: this.image.value,
    summary: this.summary.value,
    category: this.category.value,
    description: this.description.value,
    price: this.price.value
  };

  this.productService.addProduct(currentAppProduct).subscribe(_ =>
      // To Clean a formular
      this.productForm.reset());

  }


}
