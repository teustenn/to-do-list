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
    saveTasks()
}


function cleanInput() {
    inpTask.value = ''
    inpTask.focus()
}


function cleanButton(div) {
    const cleanButton = document.createElement('button')
    
    cleanButton.innerText = 'Apagar'
    cleanButton.setAttribute('class', 'btn-clean')
    cleanButton.setAttribute('title', 'Apagar esta tarefa')
    div.appendChild(cleanButton)
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
    console.log(tasksJSON)
}
