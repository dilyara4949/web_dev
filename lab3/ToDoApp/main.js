const form = document.querySelector('.inpt');
const inputTxt = document.querySelector('#inputText');
const listOfTasks = document.querySelector('#listOfTasks');


form.addEventListener('submit', addNewTask);



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