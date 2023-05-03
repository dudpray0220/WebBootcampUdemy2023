const btn = document.querySelector("#v2");

btn.onclick = function () {
  console.log("YOU CLICKED ME!");
  console.log("I HOPE IT WORKED!!");
};

function scream() {
  console.log("AAAAAHHHHH");
  console.log("STOP TOUCHING ME!");
}

btn.onmouseenter = scream;

// document.querySelector("h1").onclick = function () {
//   alert("click");
// };

// same with above
document.querySelector("h1").onclick = () => {
  alert("you clicked the h1!");
};

const btn3 = document.querySelector("#v3");
btn3.addEventListener("click", () => {
  console.log("button 3!!!!!!!!!!!!!!!!!");
});

function twist() {
  console.log("TWIST!");
}

const tasButton = document.querySelector("#tas");

tasButton.addEventListener("click", twist);

function shout() {
  console.log("SHOUT!");
}
tasButton.addEventListener("click", shout);

// tasButton.onclick = twist;
// tasButton.onclick = shout;
