const createTaskButton = document.getElementById("createTask")
const toDoList = document.getElementById("toDoList")

createTaskButton.addEventListener('click', () => {
  createTask();
})



function createTask() {
  const taskName = document.getElementById("newTask").value;

  if (taskName === "") {
    return;
  }
  const todo_id = Math.random(1000)/toString(36).substring(7);
  document.getElementById('newTask').value=null;

  console.log(taskName);

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
  checkIcon.src = "check.svg";

  const deleteIcon = document.createElement("img");
  deleteIcon.src = "x.svg";

  checkButton.appendChild(checkIcon);
  deleteButton.appendChild(deleteIcon);

  buttonWrapper.appendChild(checkButton);
  buttonWrapper.appendChild(deleteButton);

  toDoWrapper.appendChild(listElement);
  toDoWrapper.appendChild(buttonWrapper);
  toDoList.appendChild(toDoWrapper);
}