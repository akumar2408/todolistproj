// script.js
function addTask() {
    const input = document.getElementById('taskInput');
    const newTask = input.value.trim();
    if (newTask !== "") {
        const li = document.createElement('li');
        
        // Span for task text
        const span = document.createElement('span');
        span.textContent = newTask;
        span.onclick = function() {
            toggleTaskCompletion(this);
        };

        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = function() {
            deleteTask(this.parentElement);
        };

        // Append span and delete button to li
        li.appendChild(span);
        li.appendChild(deleteBtn);

        // Append li to list
        document.getElementById('tasksList').appendChild(li);

        // Clear the input
        input.value = '';
    } else {
        alert("Please enter a task!");
    }
}

function toggleTaskCompletion(taskElement) {
    taskElement.classList.toggle('completed');
}

function deleteTask(taskElement) {
    taskElement.remove();
}
