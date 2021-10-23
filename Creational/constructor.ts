
// In classical object-oriented programming languages, a constructor is a special method used to initialize a newly created object once the memory has been allocated for it.

// Object constructors are used to creating specific types of objects - both preparing the object for use and accepting arguments which a constructor can use to set the values of member properties and methods when the object is first created.

//  3 options to create a new empty object:
 
var newObject = {};
// or
var newObject2 = Object.create( Object.prototype );
// or
var newObject3 = new Object();
 
// Four ways in which keys and values can then be assigned to an object:
// ECMAScript 3 compatible approaches
 
// 1. Dot syntax
 
// Set properties
// newObject.someKey = "Hello World";
 
// Get properties
// var value = newObject.someKey;
 
 
 
// 2. Square bracket syntax
 
// Set properties
newObject["someKey"] = "Hello World";
 
// Get properties
var value = newObject["someKey"];
 
 
 
// ECMAScript 5 only compatible approaches
// For more information see: http://kangax.github.com/es5-compat-table/
 
// 3. Object.defineProperty
 


// Set properties
Object.defineProperty( newObject, "someKey", {
    value: "for more control of the property's behavior",
    writable: true,
    enumerable: true,
    configurable: true
});
 
let newPerson = {
  name:"Emily",
  age:20,
  };
  // Object.freeze(person)
  // Object.seal(person)
  Object.defineProperty(newPerson, "job",{

      value:3,
      
      writable: true,
    enumerable: true,
    configurable: true
      
      });
  newPerson.name = "Jack";
  newPerson['job'] = "Developer";
  console.log(newPerson, 'newPerson');

// If the above feels a little difficult to read, a short-hand could be written as follows:
 
var defineProp = function ( obj, key, value ){
  var config = {
    value: value,
    writable: true,
    enumerable: true,
    configurable: true
  };
  Object.defineProperty( obj, key, config );
};
 
// To use, we then create a new empty "person" object
var person = Object.create( Object.prototype );
 
// Populate the object with properties
defineProp( person, "car", "Delorean" );
defineProp( person, "dateOfBirth", "1981" );
defineProp( person, "hasBeard", false );
 
console.log(person, 'person');
// Outputs: Object {car: "Delorean", dateOfBirth: "1981", hasBeard: false}
 
 
// 4. Object.defineProperties
 
// Set properties
Object.defineProperties( newObject, {
 
  "someKey": {
    value: "Hello World",
    writable: true
  },
 
  "anotherKey": {
    value: "Foo bar",
    writable: false
  }
 
});
 
// Getting properties for 3. and 4. can be done using any of the
// options in 1. and 2.
 
// These methods can also be used for inheritance
 
// Create a race car driver that inherits from the person object
var driver = Object.create( person );
 
// Set some properties for the driver
defineProp(driver, "topSpeed", "100mph");
 
// Get an inherited property (1981)
console.log( driver.dateOfBirth );
 
// Get the property we set (100mph)
console.log( driver.topSpeed );
 
 
//  a single instance of toString() will now be shared between all of the Car objects 
// Constructors With Prototypes
function Car( model, year, miles ) {
 
  this.model = model;
  this.year = year;
  this.miles = miles;
 
}
 
 
// Note here that we are using Object.prototype.newMethod rather than
// Object.prototype so as to avoid redefining the prototype object
Car.prototype.toString = function () {
  return this.model + " has done " + this.miles + " miles";
};
 
// Usage:
 
var civic = new Car( "Honda Civic", 2009, 20000 );
var mondeo = new Car( "Ford Mondeo", 2010, 5000 );
 
console.log( civic.toString() );
console.log( mondeo.toString() );
 
 
// a simple version of the constructor pattern but it does suffer from some problems. One is that it makes inheritance difficult and the other is that functions such as toString() are redefined for each of the new objects created using the Car constructor.
 
 function Car2( model, year, miles ) {
 
 this.model = model;
 this.year = year;
 this.miles = miles;
 
 this.toString = function () {
   return this.model + " has done " + this.miles + " miles";
 };
}
 
// Usage:
 
// We can create new instances of the car
var civic = new Car2( "Honda Civic", 2009, 20000 );
var mondeo = new Car2( "Ford Mondeo", 2010, 5000 );
 
// and then open our browser console to view the  output of the toString() method being called o these objects
console.log( civic.toString() );
console.log( mondeo.toString() );

// tsc Creational/constructor.ts 
// node Creational/constructor.js