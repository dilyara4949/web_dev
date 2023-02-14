const form = document.querySelector('.inpt');
const inputTxt = document.querySelector('#inputText');
const listOfTasks = document.querySelector('#listOfTasks');


form.addEventListener('submit', addNewTask);

listOfTasks.addEventListener('click', deleteTask);

listOfTasks.addEventListener('click', doneTask);

function doneTask(event) {
  if (event.target.checked === true) {
    // alert('k nwedkjn ')
    const up = event.target.closest('li')
    const addedText = up.querySelector('.added-text')
    console.log(addedText)
    addedText.classList.add('added-text-done')
  }
  else {
    const up = event.target.closest('li')
    const addedText = up.querySelector('.added-text')
    console.log(addedText)
    addedText.classList.remove('added-text-done')
  }
}

function deleteTask(event) {
  if (event.target.dataset.action == "delete") {
    console.log('1234');
    const up = event.target.closest('li');
    // console.log(up);
    up.remove();
  }
}

function addNewTask(event) {
  event.preventDefault();

  const newText = inputTxt.value;

  const addedBlock = `
  <li>
    <div class="one-item">
      <input type="checkbox" class="checkbox">
      <span class="added-text">${newText} </span>
      <button type="button" class="trash" data-action="delete">
        <image src="https://img.icons8.com/ios-glyphs/2x/filled-trash.png" width="20" ></image>
      </button>
    </div>
  </li>`;

  listOfTasks.insertAdjacentHTML(`beforeend`, addedBlock);

  inputTxt.value = '';
  inputTxt.focus();
}