let tasks = [];


function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = ''; 
  tasks.forEach((task, index) => {
    const li = document.createElement('li'); 
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => toggleTaskCompletion(index)); 

    const taskText = document.createElement('span'); 
    taskText.textContent = task.text;
    if (task.completed) {
      taskText.style.textDecoration = 'line-through';
    }

    const deleteBtn = document.createElement('button'); 
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => deleteTask(index));
    li.appendChild(checkbox); 
    li.appendChild(taskText);
    li.appendChild(deleteBtn);
    taskList.appendChild(li); 
  });
}


function addTask() {
  const taskInput = document.getElementById('taskInput');
  const newTask = taskInput.value.trim();

  if (newTask) {
    tasks.push({ text: newTask, completed: false }); 
    taskInput.value = '';
    renderTasks();
  }
}


function toggleTaskCompletion(index) {
  tasks[index].completed = !tasks[index].completed; 
  renderTasks(); 
}


function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks(); 
}


function clearAllTasks() {
  tasks = [];
  renderTasks();
}


document.getElementById('addTaskBtn').addEventListener('click', addTask);

document.getElementById('clearAllBtn').addEventListener('click', clearAllTasks);