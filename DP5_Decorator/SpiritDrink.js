class SpiritDrink {
    constructor(name, price, currency) {
        this.name = name;
        this._price = price;
        this._currency = currency;
    }

    get currency() {
        this._currency = currency;
    }
    set price(newValue) {
        this._price = newValue;
    }
    set currency(newCurr) {
        this._currency = newCurr; 
    }
}


module.exports = SpiritDrink;