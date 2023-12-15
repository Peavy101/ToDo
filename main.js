const createTaskButton = document.getElementById("createTask")
const toDoList = document.getElementById("toDoList")

createTaskButton.addEventListener('click', () => {
  const taskName = document.getElementById("newTask").value;
  const todo_id = Math.random(1000)/toString(36).substring(7);
  document.getElementById('newTask').value=null;

  console.log(taskName)

  const toDoWrapper = document.createElement("div");
  toDoWrapper.setAttribute('id', todo_id);

  const listElement = document.createElement("li");
  listElement.innerText = taskName;

  const checkButton = document.createElement("button");
  checkButton.innerText = "complete";
  checkButton.setAttribute('id', todo_id + "-check");
  checkButton.addEventListener('click', () => {
    if (toDoWrapper.style.textDecoration === "line-through") {
      toDoWrapper.style.textDecoration = "none";
    }
    else toDoWrapper.style.textDecoration = "line-through";
  })

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "delete";
  deleteButton.setAttribute('id', todo_id + "-delete")
  deleteButton.addEventListener('click', () => {
    toDoWrapper.remove();
  })
  
  toDoWrapper.appendChild(listElement);
  toDoWrapper.appendChild(checkButton);
  toDoWrapper.appendChild(deleteButton);
  toDoList.appendChild(toDoWrapper);
})