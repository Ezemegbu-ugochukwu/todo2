const submitButton =  document.querySelector('#submit');
const todoContainer = document.querySelector('#todoContainer');
const inputField = document.querySelector('#createForm');

submitButton.addEventListener('click', ()=>{
   var paragraph = document.createElement('p');
   paragraph.classList.add('paragraph-styling')
   paragraph.innerText = inputField.value
   todoContainer.appendChild(paragraph);
})

