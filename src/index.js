document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#create-task-form');
  const taskList = document.querySelector('#tasks');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const newTaskDescription = document.querySelector('#new-task-description').value;
    const taskItem = document.createElement('li');
    taskItem.textContent = newTaskDescription;
    taskList.appendChild(taskItem);
    form.reset();
  });
});
