document.addEventListener('DOMContentLoaded', function () {
  const newTaskInput = document.getElementById('newTask');
  const addTaskButton = document.getElementById('addTask');
  const taskList = document.getElementById('taskList');

  // Event listener to add a new task
  addTaskButton.addEventListener('click', function () {
    const newTaskText = newTaskInput.value.trim();

    if (newTaskText !== '') {
      const taskItem = document.createElement('li');
      taskItem.innerHTML = `
        <input type="checkbox">
        <span>${newTaskText}</span>
        <button class="delete">Delete</button>
      `;

      // Add event listener to mark task as completed
      const checkbox = taskItem.querySelector('input[type="checkbox"]');
      checkbox.addEventListener('change', function () {
        taskItem.classList.toggle('completed', checkbox.checked);
      });

      // Add event listener to delete the task
      const deleteButton = taskItem.querySelector('.delete');
      deleteButton.addEventListener('click', function () {
        taskList.removeChild(taskItem);
      });

      taskList.appendChild(taskItem);
      newTaskInput.value = ''; // Clear the input field
    }
  });
});
