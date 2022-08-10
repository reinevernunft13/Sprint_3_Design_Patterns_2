## Middleware Design Pattern

- The Middleware pattern allows us to design a pipeline of functions that can modify or augment incoming data before it reaches the target function.

- The essential component of this pattern is the so-called Middleware Manager, which is responsible for storing middleware functions and organizing their execution.

### Exercise

- Create a small application in an initial file that adds, subtracts, and multiplies values stored in a JSON doc.

- Create a class in a separated file that stores middlewares (i.e. middleware functions).

- When calling each math operation, insert middlewares that make the square, cube, and division between the two initial operands used for each operation. Invoke the operations of addition, subtraction and multiplication. Modifications made to the values must be logged to the console ​​before the final result.

### Instructions

To test the code, please run the following command:

`````
node app.js
`````