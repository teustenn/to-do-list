const inpTask = document.querySelector('.inp-task');
const btnTask = document.querySelector('.btn-task');
const tasks = document.querySelector('.tasks');

function newTask(txtInput) {
    const li = document.createElement('li')
    li.innerHTML = txtInput;
    tasks.appendChild(li)
}

btnTask.addEventListener('click', function() {
    if (!inpTask.value) return;

    newTask(inpTask.value);
})

inpTask.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!inpTask.value) return;
        newTask(inpTask.value)
    }
})