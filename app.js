//access to elements
const buttonEl=document.querySelector('button')
const inputEl=document.querySelector('input');
const listEl=document.querySelector('ul');

//function to add
function addGoal(){
    const enteredValue=inputEl.value; //we get the value inserted into input type in html
    const listItemEl=document.createElement('li'); //we create a new element in the list
    listItemEl.textContent=enteredValue; //we set the text from the input field to be the value of the new list element we created
    listEl.appendChild(listItemEl); //we append the new list item(li) to the list(ul)
    inputEl.value=' '; //we do this to reset the value of the input element
}

//adding an event to the button
buttonEl.addEventListener('click',addGoal)