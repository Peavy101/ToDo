const createTaskButton = document.getElementById("createTask")
const toDoList = document.getElementById("toDoList")

const feelingLuckyButton = document.getElementById("feelingLucky")

createTaskButton.addEventListener('click', () => {
  createUserTask();
})

feelingLuckyButton.addEventListener('click', () => {
  createRandomTask();
})

// Generic method for adding new Tasks into the DOM's HTML layout
function injectTaskHTML(taskName) {

  const todo_id = Math.random(1000)/toString(36).substring(7);
  document.getElementById('newTask').value=null;

  const toDoWrapper = document.createElement("div");
  toDoWrapper.setAttribute('id', todo_id);

  const buttonWrapper = document.createElement("div");
  buttonWrapper.setAttribute('class', "buttonDiv");

  const listElement = document.createElement("li");
  listElement.innerText = taskName;

  const checkButton = document.createElement("button");
  checkButton.innerText = "";
  checkButton.setAttribute('id', todo_id + "-check");
  checkButton.addEventListener('click', () => {
    if (toDoWrapper.style.textDecoration === "line-through") {
      toDoWrapper.style.textDecoration = "none";
    }
    else toDoWrapper.style.textDecoration = "line-through";
  })

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "";
  deleteButton.setAttribute('id', todo_id + "-delete")
  deleteButton.addEventListener('click', () => {
    toDoWrapper.remove();
  })
  
  const checkIcon = document.createElement("img");
  checkIcon.setAttribute('class', "check");
  checkIcon.src = "check.svg";

  const deleteIcon = document.createElement("img");
  deleteIcon.setAttribute('class', "x");
  deleteIcon.src = "x.svg";

  checkButton.appendChild(checkIcon);
  deleteButton.appendChild(deleteIcon);

  buttonWrapper.appendChild(checkButton);
  buttonWrapper.appendChild(deleteButton);

  toDoWrapper.appendChild(listElement);
  toDoWrapper.appendChild(buttonWrapper);
  toDoList.appendChild(toDoWrapper);
}

// Handles creation of tasks from user input data
function createUserTask() {
  const taskName = document.getElementById("newTask").value;

  if (taskName === "") throw new Error('Please input a valid task name')

  injectTaskHTML(taskName);
}

// Handles creation of tasks from API data
const createRandomTask = async () => 
{
  const data = await fetch('https://dummyjson.com/todos/random')
    .then((data) => data.json())
    .catch((error) => {throw new Error(error)})

  const taskName = data.todo;

  injectTaskHTML(taskName)
}