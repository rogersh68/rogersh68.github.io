// Immediately Invoked Function Expression example
(function(){
    const temp = 'World';
    console.log(`Hello ${temp}`);
    })();

// Temporary Initialization Code
(function() {
    const name = 'Peter Parker'; // This might be obtained from a cookie in reality
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday', 'Friday','Saturday'];
    const date = new Date(),today = days[date.getDay()];
    console.log(`Welcome back ${name}. Today is ${today}`);
})();

// self-defining function
function party(){
    console.log('Wow this is amazing!');
    party = function(){
        console.log('Been there, got the T-Shirt');
    }
}

// Recursive function
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Callbacks - Hell example
login(userName, function(error,user) {
    if(error){
        throw error;
    } else {  
        getPlayerInfo(user.id, function(error,info){
        if(error){
        throw error;
        } else {
            loadGame(info, function(error,game) {
                if(error){
                        throw error;
                    } else {
                    // code to run game
                }
            });
        }
        });
    }
});

// Creating a promise
const promise = new Promise( (resolve, reject) => {
    // initialization code goes here
    if (success) {
        resolve(value);
    } else {
        reject(error);
    }
});

// Promise example
const dice = {
    sides: 6,
        roll() {
            return Math.floor(this.sides * Math.random()) + 1;
        }
    }
    console.log('Before the roll');
    const roll = new Promise( (resolve,reject) => {
        const n = dice.roll();
        if(n > 1){
            setTimeout(()=>{resolve(n)},n*200);
        } else {
            setTimeout(()=>reject(n),n*200);
        }
    });
    roll.then(result => console.log(`I rolled a ${result}`) )
    .catch(result => console.log(`Drat! ... I rolled a ${result}`) );
    console.log('After the roll');

// Async function example
async function loadGame(userName) {
    try {
        const user = await login(userName);
        const info = await getPlayerInfo (user.id);
        // load the game using the returned info
    }
    catch (error){
        throw error;
    }
}

// Functions taht return functions example
function returnHello() {
    console.log('returnHello() called');
    return function() {
        console.log('Hello World!');
    }
}

// Closure example (inner function has access to variables in outer function)
// returning inner function gives access to both variables
function outer() {
    const outside = 'Outside!';
    function inner() {
        const inside = 'Inside!';
        console.log(outside);
        console.log(inside);
    }
    return inner;
}
    // assign function to closure and call it. It gives both variables
const closure = outer();

closure()