let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");
let msg = document.getElementById("msg");

// Load saved tasks
window.addEventListener("load", loadTasks);

// Add task
addBtn.addEventListener("click", addTask);

// Add on Enter key
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

function addTask() {
  let taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  createTask(taskText);
  saveTasks();
  taskInput.value = "";

  // Show success message for 2 seconds
  msg.classList.remove("hidden");
  setTimeout(() => {
    msg.classList.add("hidden");
  }, 2000);
}

function createTask(text, completed = false) {
  let li = document.createElement("li");
  li.innerText = text;

  if (completed) {
    li.classList.add("completed");
  }

  // Toggle complete on click
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
    saveTasks();
  });

  // Delete button
  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";

  delBtn.addEventListener("click", function (e) {
    e.stopPropagation(); // stop li click
    taskList.removeChild(li);
    saveTasks();
  });

  // Edit on double click
  li.addEventListener("dblclick", function () {
    let newText = prompt("Edit task:", li.innerText);
    if (newText !== null && newText.trim() !== "") {
      li.innerText = newText;
      li.appendChild(delBtn);
      saveTasks();
    }
  });

  li.appendChild(delBtn);
  taskList.appendChild(li);
}

function saveTasks() {
  let tasks = [];
  document.querySelectorAll("#taskList li").forEach((li) => {
    tasks.push({
      text: li.childNodes[0].nodeValue,
      completed: li.classList.contains("completed"),
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  let saved = localStorage.getItem("tasks");
  if (saved) {
    let tasks = JSON.parse(saved);
    tasks.forEach(task => {
      createTask(task.text, task.completed);
    });
  }
}
