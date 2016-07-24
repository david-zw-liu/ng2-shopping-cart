export class Product { 

    constructor(
        private _name: string = "",
        private _price: number = null,
        private _amount: number = null
    ) {}
    
    public get name() : string {
        return this._name;
    }

    public get price() : number {
        return this._price;
    }

    public get amount() : number {
        return this._amount;
    }
    
    
    public get total() : number {
        return this._price * this._amount;
    }
    
    
    public set name(v : string) {
        if(v.length > 0){
            this._name = new String(v).toString();
        }else{
            this._name = null;
            console.error("Error when setting name.");
        }
    }
    
    public set price(v : number) {
        if(v >= 0){
            this._price = v;
        }else{
            this._price = null;
            console.error("Error when setting price.");
        }
    }
    
    public set amount(v : number) {
        if(v >= 1){
            this._amount = v;
        }else{
            this._amount = null;
            console.error("Error when setting amount.");
        }
    }

    public get isValid(): boolean {
        if(this._name === null || this._price === null  || this._amount === null){
            return false;
        }
        return true;
    }

    public setWithObject(obj: Object) {
        this["_name"] = obj["_name"];
        this["_price"] = parseInt(obj["_price"]);
        this["_amount"] = parseInt(obj["_amount"]);
    }

}
