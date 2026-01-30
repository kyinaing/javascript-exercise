const h1 = document.querySelector("h1");
h1.innerText;

h1.innerText = "Change to something";

h1.textContent;

const ul = document.querySelector("ul");
ul.innerHTML;

const inputs = document.querySelector("input");
inputs[0].value;

inputs[2].checked; // true or false

inputs[1].placeholder;

const a = document.querySelector("a");
a.href;

const img = document.querySelector("img");
img.src;

//getting and setting attributes

const range = document.querySelector('input[type="range"]');

range.getAttribute("max"); // "500"

range.getAttribute("min"); // "100"

range.getAttribute("type"); //range

range.setAttribute("min", "-500");

range.value;

range.setAttribute("type", "radio");

//Finding Parent Children Siblings

const firstLI = document.querySelector("li");

firstLI.parentElement; // ul

firstLI.parentElement.parentElement; // body

firstLI.parentElement.parentElement.parentElement; // html

ul.children;

ul.children[0];

ul.children[0].innerText;

firstLI.nextElementSibling;

firstLI.nextElementSibling.nextElementSibling;

const thirdLI = firstLI.nextElementSibling.nextElementSibling;

thirdLI.previousElementSibling;

// Changing Multiple Elements
const allLis = document.querySelector("li");

for (let i = 0; i < allLis.length; i++) {
  // console.log(allLis[i].innerTest)
  allLis[i].innerText = "We are the Champion";
}

for (let li of allLis) {
  li.innerHTML = "We are <b>The CHAMPION</b>";
}

//Altering Style

const h1 = document.querySelector("h1");
h1.style.color;
h1.style.color = "orchid";

const p = document.querySelector("p");

p.style.color = "white";

p.style.backgroundColor = "blue";

p.style.fontSize = "40px";

const colors = ["red", "orange", "yellow", "green", "blue", "purple"];

allLis.onbeforematch((li, i) => {
  const color = colors[i];
  li.style.color = color;
});

// Get Compute Style

h1.style.color;

h1.style.fontSize;

const compStyles = getComputedStyle(h1);
compStyles.color;
compStyles.fontSize;

//Manipulating Classes
const todo = document.querySelector('#todos .todo')

// Setting styles one at a time is not ideal:
// todo.style.color = 'gray'
// todo.style.textDecoration = 'line-through'
// todo.style.opacity = '50%'

// We can use a class instead!
// In app.css I've defined a 'done' class that we can apply

// OPTION 1 - using setAttribute
//This adds the class 'done', but it overwrites any existing classes...
// todo.setAttribute('class', 'done');

// OPTION 2 - classList
// We can use the classList property and it's methods to add,remove, and toggle classes!

todo.classList.add('done')

todo.classList.remove('done')

//to toggle
todo.classList.toggle('done'); //add
todo.classList.toggle('done'); //remove
todo.classList.toggle('done'); //add
todo.classList.toggle('done'); //remove
todo.classList.toggle('done'); //add

todo.getAttribute('class')
todo.getAttribute('class').includes('done') //false
todo.setAttribute('class', todo.getAttribute('class') + ' done')
todo.getAttribute('class').includes('done') // true

//Create Element

const newh2 = document.createElement('h2')
console.dir(newh2)
newh2
newh2.innerText = "I like animals!"
newh2

newh2.classList.add('special')
newh2.getAttribute('class')

const section = document.querySelector('section')
section.appendChild('newh2')

// Make a new empty img element:

const newImg = document.createElement('img')

newImg.src = 'https://images.unsplash.com/photo-1504006833117-8886a355efbf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80';

newImg.style.width = '300px';

document.body.appendChild(newImg)

// Create a new anchor tag
const newLink = document.createElement('a');
newLink.innerText = 'Mr. Bubz Video! CLICK MEEE';
newLink.href = 'https://www.youtube.com/watch?v=QQNL83fhWJU';

const firstP = document.querySelector('p');
firstP.appendChild(newLink)

//Append, prepend and InsertBefore

const parentUL = document.querySelector('ul')
const newLI = document.createElement('li')
newLI.innerText = 'I AM A NEW LI'
parentUL.appendChild(newLI) //append in the end

//prepend will add newLI as the FIRST child of parentUL
parentUL.prepend(newLI)
//We can also insert something BEFORE another element, using insertBefore.
// First, select the element to insert before:
const targetLI = document.querySelector('li.todo')
// To insert our new LI before targetLI...
//parent.insertBefore(what to insert, where to insert)
parentUL.insertBefore(newLI, targetLI)
//targetElement.insetAdjacentElement(position, element)
// other Choice
// beforebegin Before the targetElement itself
// afterbegin Just inside the targetElement, before its first child
// beforeend Just inside the targetElement, after its last child
// afterend After the targetElement itself

// <!-- beforebegin -->
// <p>
//     <!-- afterbegin -->
//     foo
//     <!-- beforeend -->
// </p>
// <!-- afterend -->

//removeChild and remove

// USING removeChild()
//Select the element you want to remove;
const removeMe = document.querySelector('.special')

//We call removeChild() on the parent element and pass in the element we want to remove:
removeMe.parentElement.removeChild(removeMe)
// USING THE NEWER REMOVE() METHOD - NO INTERNET EXPLORER SUPPORT!
//Select the H1

const h1 = document.querySelector('h1')
h1.remove();