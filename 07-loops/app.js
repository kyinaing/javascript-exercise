// 3 pieces to a for loop:
// 1 - Variable declaration
// 2 - The condition
// 3 - Update the loop variable

// STEP 1: 'let i = 1' - start i at 1
// STEP 2: 'i <= 10' - run the loop as long as i <= 10
// STEP 3: 'i++' - add 1 to i each time through

for (let i = 1; i <=10; i++) {
    console.log('Hello:', i);
}
console.log('');

// Counting by 3's:
for (let i = 1; i <=10; i+=3) {
    console.log('Hello:', i);
}
console.log('');

// Printing first 20 perfect squares:
for (let num = 1; num <= 20; num++) {
    console.log(`${num} x ${num} = ${num * num}`);
}
console.log('');

// Counting DOWN from 200 by intervals of 25:
for (let i=200; i>=0; i -= 25) {
    console.log(i);
}
console.log('AFTER THE LOOP OF FIRST ONE')
console.log('');

// DON'T RUN THIS! INFINITE LOOP
// for (let i = 1; i !== 20; i += 2) {
// 	console.log(i);
// }

// THE ABOVE LOOP NEVER ENDS
// i starts at 1, and we add 2 each time
// 1,3,5,7,9,11,13,15,17,19,21,etc.
// i never hits 20, so the loop condition is always true

// Instead, write it this way:
for (let i = 1; i <=20; i += 2) {
    console.log(i);
}
console.log('');

//For Loop Arrays String
console.log('For Loop Arrays String');

// ======= EXAMPLE 1 ==========
// Printing each element in an array
const examScores = [ 98, 77, 84, 91, 57, 66 ];

for (let i = 0; i < examScores.length; i++) {
    console.log(i, examScores[i]);
}

// ======= EXAMPLE 2 ==========
// Same idea, but with a more complex array
const myStudents = [
	{
		firstName : 'Zeus',
		grade     : 86
	},
	{
		firstName : 'Artemis',
		grade     : 97
	},
	{
		firstName : 'Hera',
		grade     : 72
	},
	{
		firstName : 'Apollo',
		grade     : 90
	}
];

for (let i = 0; i < myStudents.length; i++) {
    let student = myStudents[i];
    console.log(`${student.firstName} scored ${student.grade}`);
}

// ======= EXAMPLE 3 ==========
// Averaging all grades in myStudents array
let total = 0; //total will hold the sum of all grades
for (let i = 0; i < myStudents.length; i++) {
    let student = myStudents[i];
    total += student.grade;
}
console.log(`The total grade is ${total}`);
console.log(`The Average is ${total / myStudents.length}`)
console.log('')

// ======= EXAMPLE 4 ==========
// Find the highest grade student

let highestGrade = 0;
let highestStudent;

for (let i = 0; i < myStudents.length; i++) {
    let student = myStudents[i];
    if (highestGrade < student.grade) {
        highestGrade = student.grade
        highestStudent = student.firstName
    }
}

console.log(`The student name who got the highest grade is ${highestStudent}`)
console.log('')
// ======= EXAMPLE 5 ==========
// Reversing a string

const word = 'stressed';

let reversedWord = '';

for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
    console.log(reversedWord);
}
console.log('');
console.log(reversedWord);
console.log('');

//Nested FOR LOOP
for (let i = 1; i <=10; i++) {
    console.log('OUTER LOOP:', i);
    for (let j = 10; j >= 0; j-=2) {
        console.log('  INNER LOOP', j);
    }
}
console.log('');

// EXAMPLE 2
// Sum all elements in our 2048 board
const gameBoard = [
	[ 4, 32, 8, 4 ],
	[ 64, 8, 32, 2 ],
	[ 8, 32, 16, 4 ],
	[ 2, 8, 4, 2 ]
];

let totalScore = 0;
for (let i = 0; i < gameBoard.length; i++) {
    let row = gameBoard[i];
    console.log(row);
    for (let j = 0; j < row.length; j++) {
        totalScore += row[j]
    }
}
console.log(`Total Score is ${totalScore}`)
console.log('');

//WHILE LOOP
const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

// while (guess !== target) {
//     console.log(`Targat: ${target} Guess: ${guess}`);
//     guess = Math.floor(Math.random() * 10);
// }

while (true) {
    if (target === guess) break;
    console.log(`Targat: ${target} Guess: ${guess}`);
    guess = Math.floor(Math.random() * 10);
}
console.log(`Targat: ${target} Guess: ${guess}`);
console.log(`CONGRATS YOU WIN!!`);
console.log('');

// FOR OF LOOP

let subreddits = [ 'soccer', 'popheads', 'cringe', 'books' ];
// With a standard for loop
for (let i = 0; i < subreddits.length; i++) {
	console.log(subreddits[i]);
}
//Much cleaner  with a for...of loop!
for (let sub of subreddits) {
	console.log(sub);
}
//Works with other iterables, like strings!
for (let char of 'cockadoodledoo') {
	console.log(char.toUpperCase());
}

const magicSquare = [ [ 2, 7, 6 ], [ 9, 5, 1 ], [ 4, 3, 8 ] ];

console.log('Version using a for loop...')
for (let i = 0; i < magicSquare.length; i++) {
    let row = magicSquare[i];
    let sum = 0
    for (let j = 0; j < row.length; j++) {
        sum += row[j];
    }
    console.log(`${row} summed to ${sum}`);
}

console.log('Much cleaner version using a for...of')
for (let row of magicSquare) {
    let sum = 0;
    for (let num of row) {
        sum += num;
    }
    console.log(`${row} summed to ${sum}`);
}

// EXAMPLE 2
// If you need the indices, use a traditional for loop!
const words1 = [ 'mail', 'milk', 'bath', 'black' ];
const words2 = [ 'box', 'shake', 'tub', 'berry' ];

for (let i = 0; i < words1.length; i++) {
    console.log(`${words1[i]}${words2[i]}`)
}

const movieReviews = {
	Arrival                : 9.5,
	Alien                  : 9,
	Amelie                 : 8,
	'In Bruges'            : 9,
	Amadeus                : 10,
	'Kill Bill'            : 8,
	'Little Miss Sunshine' : 8.5,
	Coraline               : 7.5
};

// THIS DOES NOT WORK!
// OBJECTS ARE NOT ITERABLE (can't use a for...of loop)
// for (let x of movieReviews) {
// 	console.log(x);
// }

// We CAN iterate over the keys of an object
for (let movie of Object.keys(movieReviews)) {
    console.log(`You rated ${movie} - ${movieReviews[movie]}`);
}

// We can also iterate over the values
// To calculate the average movie rating:
const ratings = Object.values(movieReviews);
let totalReview = 0;
for (let r of ratings) {
    totalReview +=r;
}

let avg = totalReview / ratings.length;
console.log('FOR OF Average Rating: ', avg);

//For IN
console.log("LOOPING with FOR IN LOOP......")
let totalR = 0;
let totalLength = 0;
for (let movie in movieReviews) {
    console.log(`You rated ${movie} - ${movieReviews[movie]}`);
    totalR += movieReviews[movie];
    totalLength ++;
}

let totalAvg = totalR / totalLength;
console.log('FOR IN Average Rating: ', totalAvg);

let numberArray = [ 11, 22, 33, 44, 55, 66, 77, 88, 99]

for (let k in numberArray) {
    console.log(`${k}: ${numberArray[k]}`)
}