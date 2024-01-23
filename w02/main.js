/*
pull existing state of checkbox from LS
update checkbox
if checkbox checked, show input form 
else, hide it. 

pull existing expenses from LS
render the expenses

when enter button is clicked:
get user input (form contents)
update LS with form contents
reset the form 
re-render expense list
*/
import { saveExpense } from './expenseTracker.mjs';
// pull existing state of checkbox from LS
let checkState = localStorage.getItem('checkState');
const inputCheckbox = document.querySelector('#allowInput');
inputCheckbox.checked = checkState === 'true' ? true : false;
console.log(checkState);

function toggleInput() {
  if (inputCheckbox.checked) {
    document.querySelector('#input').classList.remove('hide');
    localStorage.setItem('checkState', 'true');
  } else {
    document.querySelector('#input').classList.add('hide');
    localStorage.setItem('checkState', 'false');
  }
  //   localStorage.setItem('checkState', inputCheckbox.checked ? 'true' : 'false');
}

toggleInput();
// If you put the function in paratheses, it will run immediately
inputCheckbox.addEventListener('change', toggleInput);

function saveHandler(e) {
  const description = document.querySelector('#description');
  const amount = document.querySelector('#amount');
  const newExpense = {
    description: description.value,
    amount: amount.value,
  };
  saveExpense(newExpense);
  description.value = '';
  amount.value = '';
}
document.querySelector('#submit').addEventListener('click', saveHandler);
