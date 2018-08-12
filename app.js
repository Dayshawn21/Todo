// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task'); 


//laod all event listerners
loadEventListeners();

//load all event listeners
function loadEventListeners() {
  document.addEventListener('DOMContentLoaded', getTasks)
  // Add Task Event
  form.addEventListener('submit', addTask);
  //Remove Task
  taskList.addEventListener('click', removeTask);
  //Clear Task
  clearBtn.addEventListener('click', clearTask);
  //Filter 
  filter.addEventListener('keyup', filterTask)
}
//Get Tasks from LS
function getTasks(){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
}
task.forEach(function(task){
//Creat a li eleemt 
const li = document.createElement('li');
//add class
li.className = 'collection-item'; 
// Create text node and appende to li
li.appendChild(document.createTextNode(taskInput.value)); 
//Create new link elemet 
const link = document.createElement('a');
//add class
link.className = 'delete-item secondary-content';
//add icon  html
link.innerHTML = '<i class="fa fa-remove"></i>';
//append the link to li
li.appendChild(link);

//append li to ul
taskList.appendChild(li);
});
}

//Add Task
function addTask(e){
  if(taskInput.value === ''){
    alert('Add a task');
  }

//Creat a li eleemt 
const li = document.createElement('li');
//add class
li.className = 'collection-item'; 
// Create text node and appende to li
li.appendChild(document.createTextNode(taskInput.value)); 
//Create new link elemet 
const link = document.createElement('a');
//add class
link.className = 'delete-item secondary-content';
//add icon  html
link.innerHTML = '<i class="fa fa-remove"></i>';
//append the link to li
li.appendChild(link);

//append li to ul
taskList.appendChild(li);

//store in LS
storeTaskInLocalStorage(taskInput.value);

//clear input
taskInput.value = ''
  
  e.preventDefault();

}

//Store Task
function storeTaskInLocalStorage(task){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else{
    tasks = JSON.parse(localStorage.getItem('tasks'));

   
  }
  tasks.push(task);
  localStorage.setItem('tasks' , JSON.stringify(tasks));
}

//remove task
function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are You Sure?')){
    e.target.parentElement.parentElement.remove();
    }
  }
}

//Clear Task
function clearTask(){

while(taskList.firstChild){
  taskList.removeChild(taskList.firstChild);
}

}

//filter task
function filterTask(e) {
  const text = e.target.value.toLowerCase();
  
  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block' ;
    }else {
      task.style.display = 'none';
    }
  });
}
