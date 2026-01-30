const kickOutBtn = document.querySelector("#clicker");

kickOutBtn.onclick = function () {
  console.log("You already kick out!!!");
};

kickOutBtn.ondblclick = function () {
  alert("You already DOUBLE kick out!!!");
};

const btn = document.querySelector("#clickMe");

btn.addEventListener("click", function () {
  alert("Don't Click Me!!!");
});

btn.addEventListener("click", function () {
  console.log("You click me!!!");
});

btn.addEventListener("mouseover", () => {
  const height = Math.floor(Math.random() * window.innerHeight);
  const width = Math.floor(Math.random() * window.innerWidth);
  btn.innerHTML = "Don't Over on Me!!!";
  console.log("You over ME!!!");
  btn.style.left = `${width}px`;
  btn.style.top = `${height}px`;
});

btn.addEventListener("click", () => {
  btn.innerHTML = "You Got Me!";
  document.body.style.backgroundColor = "red";
});

const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "indigo",
  "violet",
];

const changeColor = function () {
  const h1Color = document.querySelector("#h1Color");
  const h1Shopping = document.querySelector('#shopping h1')
  const ulShopping = document.querySelector('#shopping ul')
  h1Color.style.color = this.style.backgroundColor;
  h1Shopping.style.color = this.style.backgroundColor;
  ulShopping.style.color = this.style.backgroundColor;
};

const container = document.querySelector("#boxes");

for (let color of colors) {
  const box = document.createElement("div");
  box.style.backgroundColor = color;
  box.classList.add("box");
  container.appendChild(box);
  box.addEventListener("click", changeColor);
}

const addItemInput = document.querySelector('#addItem')
const itemUL = document.querySelector('#items')

addItemInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        if (!this.value) return;
        const newItemText = this.value;
        const newItem = document.createElement('li')
        newItem.innerText = newItemText
        itemUL.appendChild(newItem);
        this.value = '';
    }
})
