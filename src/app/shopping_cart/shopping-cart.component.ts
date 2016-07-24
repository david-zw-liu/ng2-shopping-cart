import { Component } from '@angular/core';
import { ShoppingCartFormComponent } from './shopping-cart-form.component';
import { ShoppingCartListComponent } from './shopping-cart-list.component';
import { ShoppingCartService } from './shopping-cart.service';
@Component({
  selector: 'shopping-cart',
  directives: [ShoppingCartFormComponent, ShoppingCartListComponent],
  providers: [ShoppingCartService],
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent { 
    constructor(private _shoppingCartService: ShoppingCartService) {}
    
    getTax() {
        return this._shoppingCartService.tax;
    }

    getTotalTax() {
        return this._shoppingCartService.getTotalTax();
    }
    
    getTotalWithTax() {
        return this._shoppingCartService.getTotalWithTax();
    }

}