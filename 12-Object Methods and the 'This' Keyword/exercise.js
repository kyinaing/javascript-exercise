// const getStats = (arr) => {
//     const max = Math.max(...arr)
//     const min = Math.min(...arr);
//     const sum = arr.reduce((sum, r) => sum + r);
//     const avg = sum / arr.length;
//     return {
//         max: max,
//         min: min,
//         sum: sum,
//         avg: avg
//     }
// }

const getStats = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = arr.reduce((sum, r) => sum + r);
  const avg = sum / arr.length;
  return {
    max,
    min,
    sum,
    avg,
  };
};

const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];

const stats = getStats(reviews);
console.log(stats);

function pick(arr) {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

function getCard() {
  const values = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  const suits = ["clubs", "spades", "hearts", "diamonds"];
  const value = pick(values);
  const suit = pick(suits);
  return {
    value,
    suit,
  };
}

console.log(getCard());

//=====Compute Properties=====

const role = "host";
const person = "Jools Holland";
const role2 = "Director";
const person2 = "James Cameron";

// const team = {};
// team[role] = person;
// team[role2] = person2;

const team = {
  [role]: person,
  [role2]: person2,
  [1 + 6 + 9]: "sixteen",
};

console.log(team);

// function addProp(obj, k, v) {
//     const copy = {
//         ...obj
//     };
//     copy[k] = v;
//     return copy;
// }

// const addProp = (obj, k, v) => {
//     return {
//         ...obj,
//         [k]: v
//     }
// }

const addProp = (obj, k, v) => ({ ...obj, [k]: v });

const res = addProp(team, "happy", ":)");
console.log(res);

//=====Adding methods to an object! and shorthand=====

// const math = {
//   numbers: [1, 2, 3, 4, 5],
//   add: function (x, y) {
//     return x + y;
//   },
//   multiply: function (x, y) {
//     return x * y;
//   },
// };

const math = {
  numbers: [1, 2, 3, 4, 5],
  add(x, y) {
    return x + y;
  },
  multiply(x, y) {
    return x * y;
  },
};

// To execute multiply:
console.log(math.multiply(5, 9)); //45

const auth = {
  username: "TommyBot",
  login() {
    console.log("LOGGED YOU IN!");
  },
  logout() {
    console.log("GOODBYE");
  },
};

console.log(auth);

//====="This" in Function=====

function sayHi() {
  console.log("Hi");
  console.log(this);
}

const greet = function () {
  //this refers to the window (global scope object in the browser)
  console.log(this);
};

const people = {
  first: "Cherilyn",
  last: "Sarkisian",
  nickName: "Cher",
  fullName() {
    //In a method, this refers to the object the method "lives" in:
    const { first, last, nickName } = this;
    return `${first} ${last} AKA ${nickName}`;
  },
  printBio() {
    // const test = this.first;
    const fullName = this.fullName();
    // console.log(`Test is ${test}`);
    console.log(`${fullName} is a person!`);
  },
  laugh: () => {
    //Arrow functions don't get their 'own' this.
    console.log(this);
    console.log(`${this.nickName} says HAHAHAHAH`);
  }
};

console.log(people.fullName());
console.log(people.printBio());
// console.log(people.laugh());


// INVOCATION CONTEXT MATTERS!!!


// const printBio = people.printBio;
// console.log(printBio())

const annoyer = {
    phrases: ["literally", "cray cray", "I can't even", "Totes!", "YOLO", "Can't Stop, Won't Stop"],
    pickPhrase() {
        const {phrases} = this;
        const idx = Math.floor(Math.random() * phrases.length)
        return phrases[idx]
    },
    start() {
        //Use an arrow function to avoid getting a different 'this':
        this.timerId = setInterval( () => {
            console.log(this.pickPhrase())
        }, 3000)
    },
    stop () {
        clearInterval(this.timerId);
        console.log("PHEW THANK HEAVENS THAT IS OVER!")
    }
}

annoyer.start();
annoyer.stop();