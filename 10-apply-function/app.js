
// Variables
const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500];

const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

const words = ['asap', 'byob', 'rsvp', 'diy'];

const words1 = ["dog", 'dig', 'log', 'bag', 'wag'];

const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy']
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction']
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories']
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic']
  },
  {
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction']
  }
]

const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const nums1 = [3, 4, 5, 6, 7];
const nums2 = [34, 35, 67, 54, 109, 102, 32, 9];

let movies = [
  "The Fantastic Mr. Fox",
  "Mr. and Mrs. Smith",
  "Mrs. Doubtfire",
  "Mr. Deeds"
]

const votes = ['y', 'y', 'n', 'y', 'n', 'y', 'n', 'y', 'n', 'n', 'n', 'y', 'y'];

//============================================================================================
//Foreach
// Using anonymous function expression:
const printTriple = numbers.forEach(function (num) {
    console.log(`Triple of ${num} is ${num * 3}`);
})

const printDouble = numbers.forEach(function (num, idx) {
    console.log(`Index ${idx} of ${num} Double is ${num * 2}`)
})

//============================================================================================
// MAP
//Map creates a new array by calling your callback function with each element in the original array.
const doubles = numbers.map(function (num) {
    return num * 2 // Need to return the value!
});
//[40, 42, 44, 46, 48, 50, 52, 54]

const numDetail = numbers.map(function (n) {
    return {
        value: n,
        isEven: n % 2 === 0
    }
})



const abbrevs = words.map(function (word) {
    return word.toUpperCase().split('').join('.');
})
//["A.S.A.P", "B.Y.O.B", "R.S.V.P", "D.I.Y"]

const titles = books.map(function (b) {
    return b.title;
})
//["Good Omens", "Bone: The Complete Edition", "American Gods", "A Gentleman in Moscow"]


//Non-arrow function expression:
// const square = function (x) {
//   return x * x;
// }

// Equivalent arrow function:
const square = (x) => {
    return x * x;
}

//parens are option when you have 1 parameter
const isEven = num => {
    return num % 2 === 0;
}

//Must include parens for multiple parameters
const multiply = (x, y) => {
    return x * y
}

// Must include parens for zero parameters
const greet = () => {
    console.log("HI!")
}

const divide = n => {
    return n / n;
}

const divide2 = n => (
    n / n
)

const divide3 = n => n / n;

const double1 = nums.map(function (n) {
    return n * 2;
})

const double2 = nums.map(n => {
    return n * 2;
})

const double3 = nums.map(n => n * 2);

const parityList = nums.map(function (n) {
    if (n % 2 === 0) return 'even';
    return 'odd';
})

const parityList1 = nums.map((n) => {
    if (n % 2 === 0) return 'even';
    return 'odd';
})

const parityList2 = nums.map((n) => (
    n % 2 === 0 ? 'even' : 'odd'
));

const parityList3 = nums.map((n) => n % 2 === 0 ? 'even' : 'odd');

//==============================================================================
//Array Find
// Find first movie that includes 'Mrs' in its title:

const movie = movies.find(movie => {
    return movie.includes('Mrs');
})

//Find first movie that begins with 'Mrs':
const moive2 = movies.find(m => m.indexOf('Mrs') === 0);

//Find first book w/ rating over 4.3
const goodBook = books.find(b => b.rating >= 4.3);

//Find first book with Neil Gaiman as an author:
const neilBook = books.find(b => b.authors.includes('Neil Gaiman'))

//=================================================================================
//Array Filter

const odd = nums2.filter(n => n % 2 === 1);
const evens1 = nums2.filter(n => n % 2 === 0);
const bigNums = nums2.filter(n => n > 50);


//All books rated over 4.3:
const goodBooks = books.filter(b => b.rating > 4.3)

// All books with fantasy as a genre:
const fantasyBooks = books.filter(book => (
    book.genres.includes('fantasy')
))

// all books that are either short stories or essays:
const shortForm = books.filter(book => (
    book.genres.includes('short stories') || book.genres.includes('essays')
))

// Simple search functionality:

const query = 'The';
const results = books.filter(book => {
    const title = book.title.toLowerCase();
    return title.includes(query.toLowerCase())
})

//=======================================================================================
//Some and Every

//Is every word 3 characters long?
const all3Letters = words1.every(word => word.length === 3);

// Do all words end in 'g'?
const allEndInG = words1.every(word => {
    const last = words1.length - 1;
    return word[last] === 'g'
});

//Does at least 1 book start with 'd'?
const someStartWithD = words1.some(word => word[0] === 'd');

// Do all words start with 'd'?
const allStartWithD = words1.every(word => word[0] === 'd');

//Are all books rated 3.5 or higher?
const allGoodBooks = books.every(book => book.rating > 3.5);

//Do any books have 2 authors?
const any2Authors = books.some(book => book.authors.length == 2);

//==========================================================================================
// Array Sort Calling
// REMEMBER THAT SORT() MUTATES THE ORIGINAL ARRAY!
// I'm using slice() to create a new copy, otherwise we would be sorting the same array 3 times:

// Default string sort :( 
const badSort = prices.slice().sort()

// Ascending Sort:
const ascSort = prices.slice().sort((a, b) => a - b);

// Descending Sort:
const descSort = prices.slice().sort((a, b) => b - a);

// Sorting books by their rating:
const sortingBooks = books.sort((a, b) => b.rating - a.rating);

//====================================================================
//Reduce
// To multiply all values in nums:
const product = nums1.reduce((total, currentVal) => {
    return total * currentVal;
});

// total    currentVal    returnVal
// 3             4           12
// 12            5           60
// 60            6           360
// 360           7           2520

//Final Return Value: 2520

// One approach to find max using reduce:
// const maxGrade = grades.reduce((max, currVal) => {
//   if (currVal > max) return currVal;
//   return max;
// });

// A shorter version using Math.max:
const maxGrade = grades.reduce((max, currentVal) => {
    return Math.max(max, currentVal)
});

// Finding the min value using Math.min: 
const minGrade = grades.reduce((max, currentVal) => (
    //using implicit return for variety's sake
    Math.min(max, currentVal)
));

// max     currVal    return
// 87        64         87
// 87        96         96
// 96        92         96
/// etc.

// We can specify an initial value as the 2nd argument to reduce:
// arr.reduce(reducerFunction, initialValue)

const total = [10, 20, 30, 40, 50].reduce((sum, currVal) => {
    return sum + currVal;
}, 1000) //sum starts at 1000, then each element is added to it

// To tally the votes:
// const votes = ['y', 'y', 'n', 'y', 'n', 'y', 'n', 'y', 'n', 'n', 'n', 'y', 'y'];
// const votesResults = votes.reduce((tally, val) => {
//     if (tally[val]) {
//         tally[val]++
//     } else {
//         tally[val] = 1;
//     }
//     return tally;
// }, {});

// The shorter version:
const votesResults = votes.reduce((tally, val) => {
    tally[val] = (tally[val] || 0) + 1;
    return tally;
}, {});

// To group books by rating: 
const groupedByRatings = books.reduce((groupedBooks, book) => {
    const key = Math.floor(book.rating);
    if (!groupedBooks[key]) groupedBooks[key] = [];
    groupedBooks[key].push(book)
    return groupedBooks;
}, {})

console.log(groupedByRatings)