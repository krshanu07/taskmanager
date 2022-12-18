// Updating local storage data
const updateLocalStorageData = () => {
    const taskTitleData = document.querySelectorAll('.title');
    const tasks = [];

    taskTitleData.forEach((task) => {
        return tasks.push(task.innerHTML);
    })
    
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Adding New Task
const addNewTask = (text = '') => {
    //creating a div and adding a class dynamically
    const task = document.createElement('div');
    task.classList.add('tasks');

    const htmlData = `
        <div class="operation">
            <h2 class="title">${text}</h2>
            <button class="delete"><i class="fa-solid fa-trash"></i></button>
        </div>
    `;

    //adding htmlData
    task.insertAdjacentHTML('afterbegin', htmlData);

    // it appends a node as the last child of a node
    document.body.appendChild(task);

    // references
    const delButton = task.querySelector('.delete');
    const taskTitle = task.querySelector('.title');

    //deleting a task
    delButton.addEventListener('click', () => {
        task.remove();
        updateLocalStorageData();
    })

    taskTitle.innerHTML = text;
}

//Check if localStorage data is available
const tasks = JSON.parse(localStorage.getItem('tasks'));
if(tasks) { tasks.forEach((task) => addNewTask(task));}

// onSubmit function
const startJs = () => {
    const task = document.getElementById('task').value;
    addNewTask(task);
    updateLocalStorageData();
}


