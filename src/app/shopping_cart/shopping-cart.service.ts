import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ShoppingCartService {
    private _tax: number = 5;
    private _productInCart: Array<Product> = new Array<Product>();

    private _cartState: Array<Array<Object>> = new Array<Array<Object>>();

    constructor() {}
        
    public get tax() :number {
        return this._tax;
    }

    addProduct(v: Product): boolean{
        if(v.isValid){
            this.restoreState();
            this._productInCart.push(v);
        }else{
            console.log("Error when adding product to list");
            return false;
        }
        return true;
    }
    
    getProductByIndex(index: number) {
        return this._productInCart[index];
    }

    updateProductByIndex(index: number, product: Product){
        this.restoreState()
        this._productInCart[index] = product;
    }

    getCart() {
        return this._productInCart;
    }

    removeProduct(index: number){
        this.restoreState();
        this._productInCart.splice(index, 1);
    }

    clearCart() {
        this.restoreState();
        this._productInCart = new Array<Product>();
    }

    undoCartState() {
        if(this._cartState.length > 0){
            this._productInCart =
                //Get state object array
                this._cartState.pop()
                //Cast object to product object
                .map(obj => {
                    var tempProduct  = new Product;
                    tempProduct.setWithObject(obj);
                    return tempProduct;
                });
        }
    }
    
    getTotalTax() {
        var totalTax: number = 0.0;
        this._productInCart.forEach(p => totalTax += p.total * this._tax / 100);
        
        return totalTax;
    }
    
    getTotalWithTax() {
            var total: number = 0.0;
            this._productInCart.forEach(p => total += p.total * (1 + this._tax / 100));
            return total;
    }
    
    

    private restoreState() {
        //Deep copy object
        this._cartState.push(JSON.parse(JSON.stringify(this._productInCart)));
        return true;
    }

}
