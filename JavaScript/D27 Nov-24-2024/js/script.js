const todoForm = document.querySelector('#todoForm');
const taskList = document.querySelector('#taskList');

todoForm.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(todoForm);
    const task = formData.get('task');
    if (!task) return;
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.textContent = 'X';
    button.addEventListener('click', () => {
        li.remove();
        // remove from session
        let tasks = JSON.parse(sessionStorage.getItem('tasks'));
        tasks = tasks.filter(t => t !== task);
        sessionStorage.setItem('tasks', JSON.stringify(tasks));
    });
    li.textContent = task;
    li.append(button);
    taskList.prepend(li);
    // check session and add to session
    if (sessionStorage.getItem('tasks')) {
        let tasks = JSON.parse(sessionStorage.getItem('tasks'));
        tasks.push(task);
        sessionStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
        sessionStorage.setItem('tasks', JSON.stringify([task]));
    }
    todoForm.reset();
});

document.addEventListener('DOMContentLoaded', () => {
    if (sessionStorage.getItem('tasks')) {
        let tasks = JSON.parse(sessionStorage.getItem('tasks'));
        tasks.forEach(task => {
            const li = document.createElement('li');
            const button = document.createElement('button');
            button.textContent = 'X';
            button.addEventListener('click', () => {
                li.remove();
                // remove from session
                let tasks = JSON.parse(sessionStorage.getItem('tasks'));
                tasks = tasks.filter(t => t !== task);
                sessionStorage.setItem('tasks', JSON.stringify(tasks));
            });
            li.textContent = task;
            li.append(button);
            taskList.prepend(li);
        });
    }
});