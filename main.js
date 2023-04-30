let btn1 = window.document.getElementById("btn1");
let body = window.document.getElementById("body");
let p1 = window.document.getElementById("p1");
// this function to change color of body.
const colors = ["red", "green", "blue", "yellow", "pink", "orange", "balck", "brown", "cyan", "white"];
let functio = () => {
  let number=Math.floor(Math.random()*colors.length);
    body.style.backgroundColor = colors[number];
    p1.textContent = colors[number];
 }
btn1.addEventListener("click", functio)
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
// this to change color of section.
let p2 = window.document.getElementById("p2");
let btn2 = window.document.getElementById("btn2");
let sec = window.document.querySelector(".sec");
let hexnumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
let x = "#";
let func = () => { 
    for (let i = 0; i < 6; i++) { 
        let index = Math.floor(Math.random() * hexnumber.length)
        let current_char = hexnumber[index];
        x += current_char;
    }
    sec.style.backgroundColor = x;
    p2.innerHTML = x;
    if (x = x.length) {
        x = "#";
    }
 }
btn2.addEventListener("click",func)