const inpTask = document.querySelector('.inp-task')
const btnTask = document.querySelector('.btn-task')
const tasks = document.querySelector('.tasks')


btnTask.addEventListener('click', function() {
    if (!inpTask.value) return
    newTask(inpTask.value)
    
    cleanInput()
})


inpTask.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!inpTask.value) return
        newTask(inpTask.value)
        
        cleanInput()
    }
})


document.addEventListener('click', function(e) {
    const el = e.target

    if (el.classList.contains('btn-clean')) {
        el.parentElement.remove()
        saveTasks()
    }
})


function newTask(txtInput) {
    const div = document.createElement('div')
    const li = document.createElement('li')
    
    li.innerText = txtInput
    div.appendChild(li)
    tasks.appendChild(div)

    cleanButton(div)
    editButton(div)

    saveTasks()
}


function cleanInput() {
    inpTask.value = ''
    inpTask.focus()
}


function cleanButton(div) {
    const cleanButton = document.createElement('button')
    
    cleanButton.setAttribute('class', 'btn-clean')
    cleanButton.setAttribute('title', 'Apagar esta Tarefa.')
    div.appendChild(cleanButton)
}


function editButton(div) {
    const editButton = document.createElement('button')

    editButton.setAttribute('class', 'btn-edit')
    editButton.setAttribute('title', 'Editar esta Tarefa.')
    div.appendChild(editButton)
}


function saveTasks() {
    const liTasks = tasks.querySelectorAll('li')
    const taskList = []

    for (let task of liTasks) {
        let taskText = task.innerText

        taskText = taskText.replace('Apagar', '')
        taskList.push(taskText)
    }

    const tasksJSON = JSON.stringify(taskList)
    localStorage.setItem('tasks', tasksJSON)
}


function readSaveTasks() {
    const tasks = localStorage.getItem('tasks')
    const listTasks = JSON.parse(tasks)

    for (let task of listTasks) {
        newTask(task)
    }
}

readSaveTasks()
