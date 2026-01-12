// ARRAYS ARE NOT IDEAL FOR STORING ALL TYPES OF DATA.

// We could use an array if we made sure we always follow the same pattern:
//index 0: total steps
//index 1: total floors
//etc.
const fitbitData = [ 308756, 1814, 211 ];

//We have no insight into WHAT we are storing at each index

//And we could mess things up super easily if we're not careful
const lucyFitbitData = [ 12344, 1814, 211 ];

// OBJECTS TO THE RESCUE!
const fitBitData = {
    totalSteps : 308727,
    totalMiles : 211.7,
    avgCaloriesBurn : 5755,
    workoutsThisWeek : '5 of 7',
    avgGoodSleep : '2:13',
    45 : 'Nelja Kymmenta viisi'
};

const palette = {
	red    : '#eb4d4b',
	yellow : '#f9ca24',
	blue   : '#30336b'
};

let mysteryColor = 'blue';


console.log("Total Steps:",fitBitData.totalSteps);
console.log("Total Miles:",fitBitData.totalMiles);
console.log("45:", fitBitData[45]);

console.log("Yellow :",palette.yellow);
console.log("Yellow Code :",palette['yellow']);

console.log("MysteryColor :", palette[mysteryColor]);

// Adding Updating Properties

const userReviews = {};

userReviews['queenBee49'] = 4.0;
userReviews.mrSmith78 = 3.5;

userReviews['queenBee49'] += 2;
userReviews.mrSmith78++;

//Arrays and Objects

const student = {
    firstName : 'David',
    lastName : 'Jones',
    strengths : ['Music', 'Art'],
    exams : {
        midterm : 92,
        final : 88
    }
};

const avg = (student.exams.midterm + student.exams.final) / 2;

const shoppingCart = [
	{
		product  : 'Jenga Classic',
		price    : 6.88,
		quantity : 1
	},
	{
		product  : 'Echo Dot',
		price    : 29.99,
		quantity : 3
	},
	{
		product  : 'Fire Stick',
		price    : 39.99,
		quantity : 2
	}
];

console.log("shoppingCart Product :", shoppingCart[1].product);
console.log("shoppingCart Price :", shoppingCart[1].price);

const game = {
	player1 : {
		username  : 'Blue',
		playingAs : 'X'
	},
	player2 : {
		username  : 'Muffins',
		playingAs : 'O'
	},
	board   : [ [ 'O', null, 'X' ], [ 'X', 'O', 'X' ], [ null, 'O', 'X' ] ]
};

console.log("Board", game.board[1]);

//Objects & Arrays are reference types

const palette2 = palette;

//If we change one value...
palette2.green = '#ebf876';

//Both variables reflect that change...
palette.green; //"#ebf876"
palette2.green; //"#ebf876"

//Array Object Equality

let nums = [1, 2, 3];
let mystery = [1, 2, 3];
let moreNums = nums;

//They 'look' the same, but refer to different arrays
nums === mystery; // false

//These two arrays reference the exact same array, so we get true:
nums === moreNums; //true


const user = {
	username      : 'CherryGarcia8',
	email         : 'garcia@gmail.com',
    notifications : []
	// notifications : [ 'message', 'alert' ]
};

//THIS WILL NOT WORK! This condition will always return 'false' since JavaScript compares objects by reference, not value.ts(2839)

// if (user.notifications === []) {
//     console.log('NO NEW NOTIFICATIONS!');
// }

// THIS VERSION DOES WORK!

console.log("length of noti:", !user.notifications.length)

if (!user.notifications.length) {
    console.log('NO NEW NOTIFICATIONS!');
}