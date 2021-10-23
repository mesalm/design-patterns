// Module Pattern
// Modules are an integral piece of any robust application's architecture and typically help in keeping the units of code for a project both cleanly separated and organized.
// Object literals don't require instantiation using the new operator. Using object literals can assist in encapsulating and organizing your code. The Module pattern was originally defined as a way to provide both private and public encapsulation for classes in conventional software engineering. 
// The Module pattern encapsulates "privacy", state and organization using closures.
// Module patterns, variables or methods declared are only available inside the module itself thanks to closure. Variables or methods defined within the returning object however are available to everyone.
// it is used to wrap a set of variables and functions.
// The central principle of the Revealing Module pattern is that all functionality and variables should be hidden unless deliberately exposed
// code encapsulation can be achieved using Modules Patterns. In addition, it is used to create private and public properties
// JavaScript modules are the most prevalently used design patterns for keeping particular pieces of code independent of other.
// things you have to understand first Function declaration, Function expression, closure, private members, public members -> return
// anonymous function expression
(function () {
    // Your code goes here 
}());
// namespace -> function expression can be stored in a variable.  Functions stored in variables do not need function names
var anoyn = (function () {
}());
// function expression
// console.log(foo());
// alert(foo()); // ERROR! foo wasn't loaded yet
var foo = function () { return 5; };
// Function Declaration
console.log(foo());
// alert(foo()); // Alerts 5. Declarations are loaded before any code can run.
// function foo() { return 5; }
// closure
var scope = "I am global";
function whatismyscope() {
    var scope = "I am just a local";
    function func() { return scope; }
    return func;
}
console.log(whatismyscope()());
// here outer function will be read always. It will not read the global variable (if any) with the same name. This is also one of the objective of using modular design pattern avoiding naming conflict.
// object literals can contain properties and methods.
// var myObjectLiteral = {
//     variableKey: variableValue,
//     functionKey: function () {
//       // ...
//     }
// };
// usage
var myModule = {
    myProperty: "someValue",
    // e.g we can define a further object for module configuration:
    myConfig: {
        useCaching: true,
        language: "en"
    },
    // a very basic method
    saySomething: function () {
        console.log("Where in the world is Paul Irish today?");
    },
    // output a value based on the current configuration
    reportMyConfig: function () {
        console.log("Caching is: " + (this.myConfig.useCaching ? "enabled" : "disabled"));
    },
    // override the current configuration
    updateMyConfig: function (newConfig) {
        if (typeof newConfig === "object") {
            this.myConfig = newConfig;
        }
    }
};
myModule.saySomething(); // Outputs: Where in the world is Paul Irish today?
myModule.reportMyConfig(); // Outputs: Caching is: enabled
myModule.updateMyConfig({
    language: "fr",
    useCaching: false
});
myModule.reportMyConfig(); // Outputs: Caching is: disabled
// Example -
var testModule = (function () {
    // private
    var counter = 0;
    // public
    return {
        incrementCounter: function () {
            return counter++;
        },
        resetCounter: function () {
            console.log("counter value prior to reset: " + counter);
            counter = 0;
            console.log("counter value after reset: " + counter);
        }
    };
})();
// Increment our counter
testModule.incrementCounter();
// Check the counter value and reset
testModule.resetCounter();
var modularpattern = (function () {
    // your module code goes here
    var sum = 0;
    return {
        add: function () {
            sum = sum + 1;
            return sum;
        },
        reset: function () {
            return sum = 0;
        }
    };
}());
console.log(modularpattern.add()); // alerts: 1
console.log(modularpattern.add()); // alerts: 2
console.log(modularpattern.reset()); // alerts: 0
// tsc module.ts 
// node module.js
