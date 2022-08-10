//This module implements the Middleware pattern. 
//MWs are functions that have access to req & res objects, as well as the next() function.

class MW {
    constructor(object) {

    this.middlewares = []; // stores middlewares
    this.object = object; 
    this.req = {};
    
    //gets object properties
    const proto = Object.getPrototypeOf(this.object);
    const props = Object.getOwnPropertyNames(proto);

    for (let p of props) {
        if(p !== "constructor") {
            this[p] = (args) => { //assigns values
                this.req = {...args}; 
                this.runMW(0); //runs first middlware
                return proto[p].call(this, this.req); //executes math operation
            }
        }
    }
}
 
use(fn){
    this.middlewares.push(fn);
}

runMW(index) {
    const count = this.middlewares.length;
    if (index < count) {
        this.middlewares[index].call(this, this.req, () => this.runMW(index + 1));
    }
}
}

module.exports = MW;

