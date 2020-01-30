
//constructor function example
const Dice = function(sides=6){
    this.sides = sides;
    this.roll = function() {
        return Math.floor(this.sides * Math.random() + 1)
    }
}

//class declaration
class Dice {
    constructor(sides=6) {
        this.sides = sides;
    }
    roll() {
        return Math.floor(this.sides * Math.random() + 1)
    }
}

//create an instance of the Dice constructor function or class:
const blueDice = new Dice(20);

//using a static method
class Dice {
    constructor(sides=6) {
        this.sides = sides;
    }
    roll() {
        return Math.floor(this.sides * Math.random() + 1)
    }
    static description() {
        return 'A way of choosing random numbers'
    }
}

//calling static method
Dice.description()


//Prototype Inheritance

//create a class
class Turtle {
    constructor(name) {
        this.name = name;
        this.weapon = 'hands';
    }
    sayHi() {
        return `Hi dude, my name is ${this.name}`;
    }
    attack(){
        return `Feel the power of my ${this.weapon}!`;
    }
}

//create a new instance:
const leo = new Turtle('Leonardo');

//point to property
leo.name;

//point to method
leo.sayHi();

//use prototype to add a property
Turtle.prototype.weapon = 'Hands';

//use prototype to add a method
Turtle.prototype.attack = function(){
    return `Feel the power of my ${this.weapon}!`;
    }

//overwriting a prototype property
leo.weapon = 'Katana Blades';
raph.weapon = 'Sai';
don.weapon = 'Bo Staff';


//Adding methods to built-in objects (here we're using the Number object)
Number.prototype.isEven = function() {
    return this%2 === 0;
}
Number.prototype.isOdd = function() {
    return this%2 === 1;
}


//chanining methods
superman.fly().move().xray();


//use that=this before the nested function so you don't lose scope
superman.findFriends = function(){
    const that = this;
    this.friends.forEach(function(friend) {
        console.log(`${friend.name} is friends with ${that.name}`);
    }
    );
}

//borrowing methods from prototypes
//take superman's fly method
const fly = superman.fly; //w/o () so the method isn't invoked

//let batman borrow the method
fly.call(batman);


//epxort a module
export const PI = 3.1415926

//import a module
import {PI} from './pi.js';

