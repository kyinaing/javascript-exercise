// STEP 1: Define the function:
function grumpus() {
    console.log('ugh...you again...');
	console.log('FOR THE LAST TIME...');
	console.log('LEAVE ME ALONE!!!');
}

// STEP 2: Call the function:
grumpus();
grumpus();
grumpus();

for (i=0; i < 3; i++) {
    grumpus();
}

//Rolling Dice Function
// Define our first function

function rollDice() {
	// Pick a random number from 1-6
	// - Math.random() gives us a decimal from 0-1
	// - We multiply by 6, so now we have a random number between 0 up to 6 (but not including 6).  Something likee 3.490823 or 5.991234
	// - Then we floor to remove the decimal,  leaving us with a whole number from 0-5
	//- Lastly we add one, to get a number between 1 and 6
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled: ${roll}`);
}

// We can call functions inside of other functions!
function throwDice(times) {
    for (i=0; i<times; i++) {
        rollDice();
    }
}

//Call it!
throwDice(5);

//Intro to Arguments
// greet now expects a single argument
function greet(nickname) {
    console.log(`Hi, ${nickname}`);
}
greet('Suski');
greet('Ramsay');

// Multiple Argument
function square(num) {
    console.log(`Your Square Number is: ${num * num}`);
}

function sum(x,y) {
    console.log(`Your summed Number is: ${x + y}`);
}

function divide(x,y) {
    console.log(`Your divided Number is: ${x / y}`);
}

square(3);
sum(3,100);
divide(4.5345, 6.3459876);

// One way of writing this function
function isPurple1(color) {
    if (color.toLowerCase() === 'purple') {
        return true;
    }
    else {
        return false;
    }
}

// We don't need the else!
function isPurple2(color) {
    if (color.toLowerCase() === 'purple') {
        return true;
    }
    return false
}

// An even shorter way!
function isPurple(color) {
    return color.toLowerCase() === 'purple';
}

function containsPurple(arr) {
    for (let color of arr) {
        if (color.toLowerCase() === 'purple' || color.toLowerCase() === 'magenta') {
            return true
        }
    }
    return false
}

containsPurple(['PURPLE', 'MAGENTA']);
