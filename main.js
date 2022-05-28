var radio1 = document.querySelector('#affirmation');
var radio2 = document.querySelector('#mantra')
var button = document.querySelector('.receive-message')
var textOutput = document.querySelector('.output')
var meditate = document.querySelector('.meditate')
var box2 = document.querySelector('.white-box2')
var deleteButton = document.querySelector('.delete-button')

button.addEventListener('click', showMessage)
deleteButton.addEventListener('click', deleteMessage)

deleteButton.style.visibility = 'hidden'


function showMessage() {
  console.log('this works')
  if (radio1.checked) {
    randomAffirmation()
    deleteButton.style.visibility = 'visible'
  } else if (radio2.checked) {
    randomMantra()
    deleteButton.style.visibility = 'visible'
  } else {
  alert('Click a button!')
  }
}

function deleteMessage() {
  console.log('this works')
  var affirmation = affirmations;
  var mantra = mantra;

  showMessage()

  // alert(`We won't show you that message again`)
}

function randomAffirmation() {
  var affirmation = affirmations[Math.floor(Math.random() * affirmations.length)]
  textOutput.innerText = affirmation;
  meditate.style.visibility = 'hidden';
}

function randomMantra() {
  var mantra = mantras[Math.floor(Math.random() * mantras.length)]
  textOutput.innerText = mantra;
  meditate.style.visibility = 'hidden';
}
