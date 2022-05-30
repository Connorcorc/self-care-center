var radio1 = document.querySelector('#affirmation');
var radio2 = document.querySelector('#mantra')
var button = document.querySelector('.receive-message')
var textOutput = document.querySelector('.output')
var meditate = document.querySelector('.meditate')
var box2 = document.querySelector('.white-box2')
var deleteButton = document.querySelector('.delete-button')

button.addEventListener('click', showMessage)
deleteButton.addEventListener('click', deleteMessage)
deleteButton.classList.add('hidden')

function showMessage() {
  console.log('this works')
  if (radio1.checked) {
    randomAffirmation()
    deleteButton.classList.remove('hidden')
    textOutput.classList.remove('hidden')
    meditate.classList.add('hidden')
  } else if (radio2.checked) {
    randomMantra()
    deleteButton.classList.remove('hidden')
    textOutput.classList.remove('hidden')
    meditate.classList.add('hidden')
  } else {
  alert('Click a button!')
  }
}

function deleteMessage() {
  console.log('this works')
  textOutput.classList.add('hidden')
  meditate.classList.remove('hidden')
  deleteButton.classList.add('hidden')
  alert(`Sorry about that. Select a new message!`)
}

function randomAffirmation() {
  var affirmation = affirmations[Math.floor(Math.random() * affirmations.length)]
  textOutput.innerText = affirmation;
  meditate.classList.add('hidden')
}

function randomMantra() {
  var mantra = mantras[Math.floor(Math.random() * mantras.length)]
  textOutput.innerText = mantra;
  meditate.classList.add('hidden')
}
