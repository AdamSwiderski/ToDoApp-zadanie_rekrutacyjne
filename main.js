const btnAdd = document.querySelector(".add-task");
const btnRemove = document.querySelector(".remove-task");
const btnClear = document.querySelector(".clear-tasks");
const taskList = document.querySelector(".task-list");
let taskNumber = 1;


function addTask() {
   const task = document.createElement("li");
   task.className = "task";
   task.innerHTML = "Task number " + taskNumber;
   taskList.appendChild(task);
   taskNumber++;
}

function removeTask() {
   taskList.lastElementChild.remove();
   taskNumber--;
}

function clearList() {
   taskList.innerHTML = "";
   taskNumber = 1;
}

btnAdd.addEventListener("click", addTask);

btnRemove.addEventListener("click", removeTask);

btnClear.addEventListener("click", clearList);