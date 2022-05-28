var radio1 = document.querySelector('#affirmation');
var radio2 = document.querySelector('#mantra')
var button = document.querySelector('.receive-message')

button.addEventListener('click', showMessage)

var mantraList = [];

function getRandomArray(array) {
  return Math.floor(Math.random() * array.length);
}

function showMessage() {
  console.log('this works')
  if (radio1.checked) {
    randomAffirmation()
  } else if {
    randomMantra()
  }
  alert('Click a button!')
}

function randomAffirmation() {
  var affirmation = Math.floor(Math.random() * array.length)
}

function randomMantra() {
  var mantra = Math.floor(Math.random() * array.length)
}

function randomMessage(affirmation, mantra)
