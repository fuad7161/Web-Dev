var itemNumber = 1;
function getTask(){
  const value = document.getElementById('newTask').value
  const addThisList = document.createElement('li');
  const taskList = document.querySelector('.taskList');
  const className = `Delete${itemNumber++}`
  addThisList.innerHTML = `
  <input type="checkbox">
  <span> ${value}</span>
  <button class=${className} onclick="getDelete()>Delete</button>
  `;
  taskList.appendChild(addThisList);
  document.getElementById('newTask').value = ""
}

function getDelete(){
  const taskList = document.querySelector('.taskList');
}