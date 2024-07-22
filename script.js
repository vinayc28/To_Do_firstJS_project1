document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
    
        }

        const li = document.createElement('li');
        li.textContent = taskText;
        console.log(li.textContent);

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        li.appendChild(removeBtn);
        taskList.appendChild(li);

        taskInput.value = '';
    }
});
