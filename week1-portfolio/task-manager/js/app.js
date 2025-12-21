// 1. Get tasks from storage (memory) or start empty
let tasks = JSON.parse(localStorage.getItem('myTasks')) || [];

// 2. Function to show tasks on the screen
function displayTasks() {
    const list = document.getElementById('taskList');
    list.innerHTML = ''; // Clear the list first

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${task} 
            <button onclick="deleteTask(${index})" style="color:red">X</button>
        `;
        list.appendChild(li);
    });
}

// 3. Function to add a new task
function addTask() {
    const input = document.getElementById('taskInput');
    if (input.value !== "") {
        tasks.push(input.value); // Add to array
        localStorage.setItem('myTasks', JSON.stringify(tasks)); // Save to memory
        input.value = ""; // Clear input box
        displayTasks(); // Refresh the list
    }
}

// 4. Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1); // Remove from array
    localStorage.setItem('myTasks', JSON.stringify(tasks)); // Update memory
    displayTasks(); // Refresh the list
}

// Show tasks immediately when the page loads
displayTasks();