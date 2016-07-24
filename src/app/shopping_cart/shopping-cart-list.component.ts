import { Component } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { InlineEditComponent } from './inline-edit.component';

@Component({
  selector: 'shopping-cart-list',
  directives: [InlineEditComponent],
  templateUrl: './shopping-cart-list.component.html',
  styleUrls: ['./shopping-cart-list.component.css']
})
export class ShoppingCartListComponent { 
    constructor(private _shoppingCartService: ShoppingCartService) {}

    removeProductInCart(index: number){
        this._shoppingCartService.removeProduct(index);
    }
}