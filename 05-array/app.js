let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// Arrays have a length
colors.length;

colors[0];

colors[3];

colors[6];

// -------------------------
// Modifying Array
// -------------------------

let shoppingList = [ 'Cheddar Cheese', '2% Milk' ];

//To change 2% Milk to Whole Milk
shoppingList[1] = 'Whole Milk';

//To add Ice Cream to the end
//Only works if array is 2 items long...
shoppingList[2] = 'Ice Cream';

//To make sure you add to the end, no matter the length of the array:
shoppingList[shoppingList.length] = 'Tomatoes';
shoppingList[shoppingList.length] = 'Potatoes';

// -------------------------
// Push and Pop
// -------------------------

let topSongs = [
	'First Time Ever I Saw Your Face',
	'God Only Knows',
	'A Day In The Life',
	'Life On Mars'
];

// To add to the end of an array:
topSongs.push('Fortunate Son');
topSongs.push('Landslide');
topSongs.push(12324166);

// To remove the last item
topSongs.pop(); //12324166

// -------------------------
//Shift and Unshift
// -------------------------

let dishesToDo = [ 'large platter' ];

//to add to the start:
dishesToDo.unshift('plate');

//add to the start again:
dishesToDo.unshift('cereal bowl')
dishesToDo.unshift('spoon');

//remove from the start:
dishesToDo.shift();

// -------------------------
// Array Concat
// -------------------------
let fruits = [ 'apple', 'banana' ];
let veggies = [ 'asparagus', 'brussel sprouts' ];
let meats = [ 'steak', 'chicken breast' ];

console.log(fruits.concat(veggies));
console.log(veggies.concat(fruits));

let allFoods = fruits.concat(veggies, meats);

// -------------------------
// Array Includes and IndexOf
// -------------------------

let ingredients = [
	'water',
	'corn starch',
	'flour',
	'cheese',
	'brown sugar',
	'shrimp',
	'eel',
	'butter'
];

//includes returns true or false
if (ingredients.includes('flour')) {
    console.log('I AM GLUTEN FREE, I CANNOT EAT THAT!');
}

if (ingredients.includes('flour', 0)) {
    console.log('I AM GLUTEN FREE, I CANNOT EAT THAT!');
}

//indexOf returns an index (or -1 if not found)

if (ingredients.indexOf('shrimp') !== -1) {
    console.log('Sorry, I hate shrimp.');
}

if (ingredients.indexOf('shrimp', 0) !== -1) {
    console.log('Sorry, I hate shrimp.');
}

// -------------------------
// Reverse and Join
// -------------------------

let letters = [ 'T', 'C', 'E', 'P', 'S', 'E', 'R' ];

//Remember that reverse() mutates the original array.
//It reverses IN PLACE rather than making a copy
let song = letters.reverse().join('-')
//"R-E-S-P-E-C-T"

// -------------------------
// Array Slice
// -------------------------

let animals = [ 'shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise' ];

let swimmers = animals.slice(0, 3); //[ 'shark', 'salmon', 'whale']
let mammals = animals.slice(2, 4); // ['whale', 'bear']

//One option:
// let reptiles = animals.slice(4, 6);

// Another option:
let reptiles = animals.slice(4); //['lizard', 'tortoise']

let quadruped = animals.slice(-3); // ['bear', 'lizard', 'tortoise']

// -------------------------
// Array Splice
// -------------------------

//splice(startIdx, deleteCount, itemsToInsert);

// =====================
// INSERTING w/ SPLICE
// =====================
// 'at index 1, delete 0 items and insert "octopus"'

animals.splice(1, 0, 'octopus');
//["shark", "octopus", "salmon", "whale", "bear", "lizard", "tortoise"]

// =====================
// DELETING w/ SPLICE
// =====================
//'at index 5, delete 2 items'
animals.splice(5, 2);
//["shark", "octopus", "salmon", "whale", "bear"]

// =====================
// REPLACING w/ SPLICE
// =====================
//'at index 3, delete 2 items and replace them with "orca" and "grizzly"'

animals.splice(3, 2, 'orca', 'grizzly');
// ["shark", "octopus", "salmon", "orca", "grizzly"]

// -------------------------
// Array Sort
// -------------------------
let people = [ 'Mrs. Robsinson', 'Angie', 'Jolene', 'Maggie May', 'Roxanne' ];

people.sort();
// ["Angie", "Jolene", "Maggie May", "Mrs. Robsinson", "Roxanne"]

let nums = [ 34, 10, 100000, 67, 99 ];
nums.sort();
//[10, 100000, 34, 67, 99]

//Sorts by converting values to strings and comparing their UTF-16 character codes.

//We will learn how to change this behavior later on!

// -------------------------
// Array Reference Type
// -------------------------

// ===============
// VALUE TYPES
// ===============
//Value Types - the variable stores the actual value:

let x = 100;
let y = x;

//If we change x
x = 99;
//y is unchanged
y; //100

// ===============
// REFERENCE TYPES
// ===============

// Array variables do not hold the actual array
//Instead, they store a REFERENCE to the array

let nums1 = [ 2, 4, 6, 8 ];
let myNums = nums1; //myNums references the same array

// If we change nums
nums1.push('BOO!');

//My nums is also changed:
myNums; //[2, 4, 6, 8, "BOO!"]

//----------------------------
// Nested Array
//----------------------------

const animalPairs = [
	[ 'doe', [ 'buck', 'stag' ] ],
	[ 'ewe', 'ram' ],
	[ 'peahen', 'peacock' ]
];

//To access 'ewe'
animalPairs[1][0];

//To access 'buck'
animalPairs[0][1][0];

//Updating a sub-array:
animalPairs[0][1].push('heart');
//apparently some people call male deer 'hearts'.  idk.