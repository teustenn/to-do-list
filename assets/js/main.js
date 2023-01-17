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
    }
})


function newTask(txtInput) {
    const li = document.createElement('li')
    
    li.innerHTML = txtInput
    tasks.appendChild(li)
    cleanButton(li)
}


function cleanInput() {
    inpTask.value = ''
    inpTask.focus()
}


function cleanButton(li) {
    const cleanButton = document.createElement('button')
    
    cleanButton.innerText = 'Apagar'
    cleanButton.setAttribute('class', 'btn-clean')
    cleanButton.setAttribute('title', 'Apagar esta tarefa')
    li.appendChild(cleanButton)
}


function saveTasks() {
    const liTasks = tasks.querySelectorAll('li')
    const listTasks = []
    
    
    for (let task of liTasks) {
        let taskText = task.innerText
        
        taskText = taskText.replace('Apagar', '').trim()
        listTasks.push(taskText)
    }

    const tasksJSON = JSON.stringify(listTasks)
    localStorage.setItem('tasks', tasksJSON)
}
