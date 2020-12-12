import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingItem } from 'src/app/shared/models/shopping-item';
import { ShoppingService } from 'src/app/shared/services/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  items$;
  constructor(
    private router: Router,
    private shoppingService: ShoppingService

  ) { }

  ngOnInit(): void {
    console.warn('ShoppinList is da');
    this.items$ = this.shoppingService.getAll();
  }

  /**
   *
   */
  showDetails(sh: ShoppingItem) {
    this.router.navigate(['shoppings/' + sh.id]);
  }

}
