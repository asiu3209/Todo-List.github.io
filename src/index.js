import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import './index.css';
import Interface from './modules/interface.js';

// Display list on page load
document.addEventListener('DOMContentLoaded', Interface.displayToDoList);
// Event: Add a task
document
  .querySelector('#title')
  .addEventListener('keypress', (e) => Interface.addTask(e));
// Event: clear all tasks completed
document
  .querySelector('.clearTask')
  .addEventListener('click', (e) => Interface.clearAllTasks(e));

  // DONE button
const doneButton = document.createElement("button");
doneButton.classList.add("done-btn");
doneButton.setAttribute("aria-label", "Mark task as done");
doneButton.setAttribute("tabindex", "0");
doneButton.innerHTML = '<i class="fas fa-check"></i>';

// DELETE button
const deleteButton = document.createElement("button");
deleteButton.classList.add("delete-btn");
deleteButton.setAttribute("aria-label", "Delete task");
deleteButton.setAttribute("tabindex", "0");
deleteButton.innerHTML = '<i class="fas fa-trash"></i>';

// Add keyboard support for Enter and Space
[doneButton, deleteButton].forEach((btn) => {
  btn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      btn.click(); // trigger the same action as a mouse click
    }
  });
});
