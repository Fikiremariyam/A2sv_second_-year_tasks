
document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('add-task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const taskCounter = document.getElementById('task-counter');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    let tasks = [];
    let currentFilter = 'all';
    
    // Add a new task
    taskForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const taskText = taskInput.value.trim();
        if (taskText === '') return;
        
        const task = {
            //title : taskText,
            //description : " add your task discription ", 
            id: Date.now().toString(),
            title: taskText,
            description: " add your task discription ",
            completed: false,
            timestamp: new Date().toISOString()
        };
        
        tasks.push(task);
        taskInput.value = '';
        
        renderTasks();
    });
    
    // Handle task actions (complete/delete/edit)

    taskList.addEventListener('click', function(e) {
        const taskItem = e.target.closest('.task-item');
        //take  the closest task to the palce where the user clicked
        
        if (!taskItem) return;
        
        const taskId = taskItem.dataset.id;
        
        // Handle checkbox click
        if (e.target.closest('.task-checkbox')) {
            toggleTaskCompletion(taskId);
        }
        
        // Handle delete button click
        if (e.target.closest('.btn-delete')) {
            deleteTask(taskId);
        }
        
        // Handle edit button click
        if (e.target.closest('.btn-edit')) {
            enableEditMode(taskItem, taskId);
        }
        
        // Handle save button click
        if (e.target.closest('.btn-save')) {
            saveTaskEdit(taskItem, taskId);
        }
        
        // Handle cancel button click
        if (e.target.closest('.btn-cancel')) {
            cancelTaskEdit(taskItem, taskId);
        }
    });
    
    // Handle filter changes
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.dataset.filter;
            currentFilter = filter;
            
            // Update active filter button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            renderTasks();
        });
    });
    
    // Toggle task completion status
    function toggleTaskCompletion(taskId) {
        tasks = tasks.map(task => {
            if (task.id === taskId) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        
        renderTasks();
    }
    
    // Delete a task
    function deleteTask(taskId) {
        tasks = tasks.filter(task => task.id !== taskId);
        renderTasks();
    }
    
    // Enable edit mode for a task
    function enableEditMode(taskItem, taskId) {

        const task = tasks.find(t => t.id === taskId);

        if (!task) return;
        const currentTitle = task.title;
        const currentDiscription = task.description;
        
        const taskContent = taskItem.querySelector('.task-content');
        
        
        // Create edit form
        const editForm = document.createElement('div');
        editForm.className = 'task-edit-form';
        editForm.innerHTML = `
            <input type="text" class="task-edit-input top-round-border" value="${currentTitle}">
            <input type="text" class="task-edit-input bottom-round-border" value="${currentDiscription }">
            <div class="task-edit-description">
            <div class="task-actions">
                <button type="button" class="action-btn btn-save">Save</button>
                <button type="button" class="action-btn btn-cancel">Cancel</button>
            </div>
        `;
        
        // Replace task content with edit form
        taskContent.replaceWith(editForm);
        if (taskContent) {
            taskContent.replaceWith(editForm);
        }
        // Focus the input field
        const editInput = editForm.querySelector('.task-edit-input');
        editInput.focus();
        editInput.setSelectionRange(0, editInput.value.length);
    }
    
    // Save task edit
    function saveTaskEdit(taskItem, taskId) {
        const newTitleInput = taskItem.querySelector('.top-round-border');
        
        const newTextInput = taskItem.querySelector('.bottom-round-border');
        

        const newtitle = newTitleInput.value.trim();
        const newDiscription = newTextInput.value.trim();
        
        if (newtitle === '' || newDiscription === '') {
             return;
        }
        tasks = tasks.map(task => {
            if (task.id === taskId) {
                return { 
                    ...task, 
                    title: newtitle,
                    description: newDiscription,

                    timestamp: new Date().toISOString() // Update timestamp on edit
                };
            }
            return task;
        });
        console.log("finshed editing the task")
        renderTasks();
    }
    
    // Cancel task edit
    function cancelTaskEdit(taskItem, taskId) {
        renderTasks();
    }
    
    // Format date for display
    function formatDate(dateString) {
        const date = new Date(dateString);
        
        // Format date: Today/Yesterday or MM/DD/YYYY
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        
        let dateText;
        
        if (date.toDateString() === today.toDateString()) {
            dateText = 'Today';
        } else if (date.toDateString() === yesterday.toDateString()) {
            dateText = 'Yesterday';
        } else {
            dateText = date.toLocaleDateString();
        }
        
        // Format time: HH:MM AM/PM
        const timeText = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        return `${dateText} at ${timeText}`;
    }
    
    // Render tasks based on current filter
    function renderTasks() {
        let filteredTasks;
        
        switch (currentFilter) {
            case 'active':
                filteredTasks = tasks.filter(task => !task.completed);
                break;
            case 'completed':
                filteredTasks = tasks.filter(task => task.completed);
                break;
            default:
                filteredTasks = tasks;
        }
        
        // Update task counter
        const remainingTasks = tasks.filter(task => !task.completed).length;
        taskCounter.textContent = remainingTasks;
        
        // Clear task list
        taskList.innerHTML = '';
        
        // Show empty state if no tasks
        if (filteredTasks.length === 0) {
            const emptyState = document.createElement('li');
            emptyState.className = 'empty-state';
            
            if (tasks.length === 0) {
                emptyState.innerHTML = `
                    <p>You have no tasks yet.</p>
                    <p>Add a task to get started!</p>
                `;
            } else {
                emptyState.innerHTML = `
                    <p>No ${currentFilter} tasks found.</p>
                `;
            }
            
            taskList.appendChild(emptyState);
         
            return;
        }
        
        // Render filtered tasks
        filteredTasks.forEach(task => {
            const taskItem = document.createElement('li');
            taskItem.className = 'task-item';
            taskItem.dataset.id = task.id;
            
            taskItem.innerHTML = `
                <div class="task-content">
                    <div class="task-checkbox ${task.completed ? 'completed' : ''}"></div>
                    <div class="task-details">
                        <div class="task-title ${task.completed ? 'completed' : ''}">${task.title}</div>
                        <div class="task-description">${task.description || 'No description'}</div>
                        <div class="task-time">Added: ${formatDate(task.timestamp)}</div>
                    </div>
                </div>
                <div class="task-actions">
                    <button class="action-btn btn-edit">Edit</button>
                    <button class="action-btn btn-delete">Delete</button>
                </div>
            `;
            
            taskList.appendChild(taskItem);
        });
    }
    
    // Initial render
    renderTasks();
});