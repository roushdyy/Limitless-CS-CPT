const counter = document.querySelector(".counter");
const bar = document.querySelector("#bar");
let load = 1;
let loading = setInterval(countUp, 5);
function countUp() {
  load++;
  counter.textContent = Math.floor(load / 2) + "%";
  bar.style.width = `${Math.floor(load / 2)}%`;
  if (load === 200) {
    clearInterval(loading);
    document.querySelector(".load").style.display = "none";
  }
}

let switchCtn = document.querySelector("#switch-cnt");
let switchC1 = document.querySelector("#switch-c1");
let switchC2 = document.querySelector("#switch-c2");
let switchCircle = document.querySelectorAll(".switch__circle");
let switchBtn = document.querySelectorAll(".switch-btn");
let aContainer = document.querySelector("#a-container");
let bContainer = document.querySelector("#b-container");
let allButtons = document.querySelectorAll(".submit");

let getButtons = (e) => e.preventDefault()

let changeForm = (e) => {

    switchCtn.classList.add("is-gx");
    setTimeout(function(){
        switchCtn.classList.remove("is-gx");
    }, 1500)

    switchCtn.classList.toggle("is-txr");
    switchCircle[0].classList.toggle("is-txr");
    switchCircle[1].classList.toggle("is-txr");

    switchC1.classList.toggle("is-hidden");
    switchC2.classList.toggle("is-hidden");
    aContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-z200");
}

let mainF = (e) => {
    for (var i = 0; i < allButtons.length; i++)
        allButtons[i].addEventListener("click", getButtons );
    for (var i = 0; i < switchBtn.length; i++)
        switchBtn[i].addEventListener("click", changeForm)
}

window.addEventListener("load", mainF);

function myData() {
  retrun;
}

function show() {
  document.getElementById('anotherFunction').classList.toggle('Active');
}

$(".base-switch").on("click",switchTheme);

function switchTheme(){
  $("body").toggleClass("changed-theme");
}

document.getElementById('learnMoreBtn').addEventListener('click', function() {
  alert('Learn More button clicked!');
});

document.querySelector('.cta-button').addEventListener('click', function() {
  alert('Thank you for joining Limitless Fitness!');
});

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    console.log(`${button.parentElement.querySelector('h2').textContent} plan selected!`);
  });
});

document.getElementById('getRecipes').addEventListener('click', () => {
  const recipeList = document.getElementById('recipeList');
  recipeList.innerHTML = '<li>Loading recipes...</li>';

  const API_URL = '' //add API;

  fetch(API_URL)
      .then(response => response.json())
      .then(data => {
          recipeList.innerHTML = ''; 
          data.recipes.forEach(recipe => {
              const li = document.createElement('li');
              li.innerHTML = `<a href="${recipe.sourceUrl}" target="_blank">${recipe.title}</a>`;
              recipeList.appendChild(li);
          });
      })
      .catch(error => {
          recipeList.innerHTML = '<li>Failed to load recipes. Please try again later.</li>';
          console.error('Error fetching recipes:', error);
      });
});