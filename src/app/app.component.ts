import { Component } from '@angular/core';
import { ShoppingCartComponent } from './shopping_cart/shopping-cart.component';

@Component({
  selector: 'my-app',
  directives:[ShoppingCartComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
    constructor() {}   
}