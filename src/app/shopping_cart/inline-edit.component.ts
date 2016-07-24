import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { Product } from './product';

@Component({
  selector: 'inline-edit',
  templateUrl: './inline-edit.component.html',
  styleUrls: ['./inline-edit.component.css']
})
export class InlineEditComponent implements OnInit { 
    @Input() index: number;
    @Input() prop: string;
    @Input() type: string;
    @Input() min: number = null;
    
    private _toggle = false;
    private _tempProduct: Product;
    
    constructor(private _shoppingCartService: ShoppingCartService) {}  

    ngOnInit() {
        this.resetStatus();
    }

    update() {
        this._shoppingCartService.updateProductByIndex(this.index, this._tempProduct);
        this.resetStatus();
        this.toggle();
    }

    toggle(){  
        this.resetStatus();
        this._toggle = !this._toggle; 
    }

    private resetStatus(){
        var tempProduct: Product = this._shoppingCartService.getProductByIndex(this.index);
        var tempObject: Object = JSON.parse(JSON.stringify(tempProduct));
        this._tempProduct = new Product();
        this._tempProduct.setWithObject(tempObject);
    }
}