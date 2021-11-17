// init vars
let name = document.querySelector('#NameInput').value;
const submitBtn = document.querySelector('#submit');
const display = document.querySelector('#display');
const bgLight = document.querySelector('#bgMode');
const body = document.querySelector('body');
var counter = 0;
const counterText = document.querySelector('#counterText');


// Dragon button
submitBtn.addEventListener('click', showPowers);

function showPowers() {
  name = document.querySelector('#NameInput').value;
  console.log(name);
  if (name === 'Drogon') {
    display.textContent = 'Fire heat: 450C,  jaw strength: 1040N, Speed: 1700 km/hr';
  } else if (name === 'Rhaegal') {
    display.textContent = 'Fire heat: 500C,  jaw strength: 1000N, Speed: 1600 km/hr';
  } else if (name === 'Viserion') {
    display.textContent = 'Fire heat: 430C,  jaw strength: 1100N, Speed: 1650 km/hr';
  } else {
    display.textContent = 'wait? who?';
  }
}

// lighting mode
bgLight.addEventListener('click', changeBgColor);

function changeBgColor() {
  body.classList.toggle('anim');
  counter++;
  if (counter < 5) {
    counterText.textContent = `Click counter: ${counter}`;
  } else {
    counterText.textContent = `it's enough. You clicked ${counter} times`;
    bgLight.disabled = true;
    bgLight.innerHTML = 'sorry';
    body.classList.remove('anim');
  }
}
