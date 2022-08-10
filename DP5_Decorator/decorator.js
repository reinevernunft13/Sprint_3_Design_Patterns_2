const currencyTable = require("./currency_conversions.json");

function convertToEuros(object) {
    let currencyConv = object._currency + '_EUR'; // We'll use this to find the key property stored in the .json. USD_EUR,JPY_EUR,etc
    let exchangeRate = currencyTable[currencyConv];//Gets exchange rate for key property
    let priceEur = exchangeRate * object._price; 
    object._price = priceEur; //setter
    object._currency = "EUR"; //setter
    return object;
}


module.exports = convertToEuros;