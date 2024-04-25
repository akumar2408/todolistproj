function addTask() {
    const input = document.getElementById('taskInput');
    const newTaskText = input.value.trim();
    const categorySelect = document.getElementById('taskCategory');
    const selectedCategory = categorySelect.value;

    if (newTaskText === "") {
        alert("Please enter a task!");
        return; 
    }
    if (selectedCategory === "none") {
        alert("Please select a category!");
        return; 
    }

    
    const li = document.createElement('li');
    li.classList.add('task', selectedCategory); 


    
    const taskText = document.createElement('span');
    taskText.classList.add('task-text');
    taskText.textContent = newTaskText;
    taskText.onclick = function() { toggleTaskCompletion(this); };

    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = function() { deleteTask(this.parentElement); };

    
    li.appendChild(taskText);
    li.appendChild(deleteBtn);
    document.getElementById('tasksList').appendChild(li);

    
    input.value = '';
    categorySelect.selectedIndex = 0; 

    const deadlineDate = document.getElementById('taskDeadlineDate').value;
    const deadlineTime = document.getElementById('taskDeadlineTime').value;

    
    let deadlineString = '';
    if (deadlineDate) {
        deadlineString = `Due: ${deadlineDate}`;
        if (deadlineTime) {
            deadlineString += ` at ${deadlineTime}`;
        }
    }

    if (deadlineString) {
        const deadlineElement = document.createElement('span');
        deadlineElement.classList.add('task-deadline');
        deadlineElement.textContent = deadlineString;
        li.appendChild(deadlineElement);
    }
}

function toggleTaskCompletion(taskElement) {
    taskElement.classList.toggle('completed');
}

function deleteTask(taskElement) {
    taskElement.remove();
}


function filterTasksByCategory() {
    const selectedCategory = document.getElementById('filterCategory').value;
    const tasks = document.querySelectorAll('.task');
  
    tasks.forEach(task => {
      if (selectedCategory === 'all' || task.getAttribute('data-category') === selectedCategory) {
        task.style.display = 'flex';
      } else {
        task.style.display = 'none';
      }
    });
  }

  function checkDeadlines() {
    const now = new Date();
    document.querySelectorAll('.task').forEach(task => {
        const deadlineString = task.getAttribute('data-deadline');
        if (deadlineString) {
            const deadline = new Date(deadlineString);
            if (now > deadline) {
                
                task.classList.add('past-deadline');
                
            }
        }
    });
}


setInterval(checkDeadlines, 60000);


