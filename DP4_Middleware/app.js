const Calculator = require("./Calculator.js");
const MW = require("./MWManager.js")
const values = require("./values.json");

//CREATE CALCULATOR OBJECT
const calc = new Calculator()

console.log("** INITIAL VALUES FOR MATH OPERATIONS **"); 
console.log(values);

console.log(" ** OPERATIONS WITHOUT MIDDLEWARES **");
console.log(`-> Addition: ${calc.add(values)}`);
console.log(`-> Substraction: ${calc.substract(values)}`);
console.log(`-> Multiplication: ${calc.multiply(values)}`);

//INSTANTIATES MWM CLASS AND ADDS CUSTOM MIDDLEWARE FNS
const app = new MW(calc);
app.use((req, next) => {
    req.a **= 2;
    req.b **= 2;
    console.log("First Middleware | Squared Values:", req);
    next();
});
app.use((req, next) => {
    req.a **= 3;
    req.b **= 3;
    console.log("Second Middleware | Cubed Values: ", req);
    next(); 
});
app.use((req, next)=>{
    req.a /= 2;
    req.b /= 2;
    console.log("Third Middleware | Divided Values: ", req);
    next();
});

//EXECUTES CALC OPERATIONS WITH MIDDLEWARE
console.log("** OPERATIONS USING MIDDLEWARES **");
console.log("-> Addition: ", app.add(values));
console.log("-> Substraction: ", app.substract(values));
console.log("-> Multiplication: ", app.multiply(values));
