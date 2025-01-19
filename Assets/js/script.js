const counter = document.querySelector(".counter");
const bar = document.querySelector("#bar");
let load = 1;
let loading = setInterval(countUp, 20);
function countUp() {
  load++;
  counter.textContent = Math.floor(load / 2) + "%";
  bar.style.width = `${Math.floor(load / 2)}%`;
  if (load === 200) {
    clearInterval(loading);
    document.querySelector(".load").style.display = "none";
  }
}
