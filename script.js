console.log('Hello!');

// Regular Function / Functions

function greeting() {
  console.log('Dette er en funskjon!');

  const firstName = 'Julie';
  const greet = 'Good morning';

  console.log(greet + ' ' + firstName);
  console.log(`${greet}, ${firstName}`);
}

greeting();
greeting();
greeting();
greeting();

// DONN (Document Object Model Manipulation)

// lagringsplass = lagringsinnhold

const greetingButton = document.querySelector('#greetingButton');
console.log(greetingButton);

greetingButton.addEventListener('click', greeting);

greetingButton.addEventListener('click', () => {
  console.log('Dette er en arrow function');

  const firstName = 'Julie';
  const greet = 'Good morning';
  console.log(greet + ' ' + firstName);
});


//HENT
const themeSwitchButton = document.querySelector('#themeSwitchButton');
console.log(themeSwitchButton);

//MODIFISER
function themeSwitch() {
  const body = document.querySelector("body");
  console.log(body)

  body.classList.toggle("dark");
}

//SEND
themeSwitchButton.addEventListener("click", themeSwitch);