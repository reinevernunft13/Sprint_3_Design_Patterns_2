const SpiritDrink = require('./SpiritDrink.js');
const decorator = require('./decorator.js');

//Creates spirit drink objects by instantiating class 'Spirit Drink'.

let drink1 = new SpiritDrink("Woodford Reserve Whiskey", 52, "USD");
let drink2 = new SpiritDrink("Gordon's Gin", 67, "GBP");
let drink3 = new SpiritDrink("Swiss Premium Absinthe", 55, "CHF");
let drink4 = new SpiritDrink("Junmai Shu Sake", 25000, "JPY");
let drink5 = new SpiritDrink("Caribou Aperitif", 95, "CAD");
let drink6 = new SpiritDrink("Wu Liang Ye Baijiu", 1730, "CNY");


//Stores spirit drink objects in an array.
const drinks = [];
drinks.push(drink1, drink2, drink3, drink4, drink5, drink6);

//Displays properties of array of objects BEFORE using decorator on each object. 
console.log("--> BEFORE APPLYING DECORATOR <--");
console.table(drinks);

//Displays properties of array of objects AFTER using decorator.
console.log("--> AFTER APPLYING DECORATOR <--");
for(let el of drinks) {
    decorator(el);
}
console.table(drinks);

//console.table(drinks.map(decorator));
