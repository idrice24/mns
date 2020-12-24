import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingItem } from 'src/app/shared/models/shopping-item';
import { ShoppingService } from 'src/app/shared/services/shopping.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  items$;
  constructor(
    private router: Router,
    private shoppingService: ShoppingService,
    private titleService: Title // Inject to set document title on  browser

  ) { }

  ngOnInit(): void {
    console.warn('ShoppinList is da');
    this.items$ = this.shoppingService.getAll();
    this.titleService.setTitle('MNS237 - Shopping-list'); // Adding the title Home to the MNS237  main Title
  }

  /**
   *
   */
  showDetails(sh: ShoppingItem) {
    this.router.navigate(['shoppings/' + sh.id]);
  }

}
