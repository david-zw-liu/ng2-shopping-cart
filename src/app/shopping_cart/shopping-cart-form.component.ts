import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
    selector: 'shopping-cart-form',
    templateUrl: './shopping-cart-form.component.html',
    styleUrls: ['./shopping-cart-form.component.css']
})
export class ShoppingCartFormComponent implements OnInit { 
    private _tempProduct: Product;
    constructor(private _shoppingCartService: ShoppingCartService) {}
    ngOnInit() {
        this._tempProduct = new Product();
    }

    onSubmit(){
        if(this._shoppingCartService.addProduct(this._tempProduct)){
            this._tempProduct = new Product();
        }
    }
    
}