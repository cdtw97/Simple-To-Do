// Execute the code when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get references to the required elements in the document
    const addTodoBtn = document.getElementById('addTodoBtn');
    const pendingTodoList = document.getElementById('pendingTodoList');
    const completedTodoList = document.getElementById('completedTodoList');
    const todoInput = document.getElementById('todoInput');
    const deadlineInput = document.getElementById('deadlineInput');
    const alertContainer = document.getElementById('alertContainer');

    // Function to display an alert message
    function showAlert(message, type) {
        const alert = document.createElement('div');
        alert.className = `alert alert-${type} alert-dismissible fade show`;
        alert.role = 'alert';
        alert.innerHTML = `${message}<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;
        alertContainer.prepend(alert);

        // Automatically remove the alert after 2 seconds
        setTimeout(function () {
            alert.remove(); // remove the alert element from DOM
        }, 2000);
    }

    // Function to check if the task lists are empty and display appropriate messages
    function checkEmptyList() {
        if (!pendingTodoList.querySelector('li')) {
            pendingTodoList.innerHTML = "<p>You don't have any pending tasks yet.</p>";
        }
        if (!completedTodoList.querySelector('li')) {
            completedTodoList.innerHTML = "<p>You haven't completed any tasks yet.</p>";
        }
    }

    // Event listener for adding a new task
    addTodoBtn.addEventListener('click', function () {
        const task = todoInput.value;
        const deadline = deadlineInput.value;
        if (task && deadline) {
            // If it's not an empty list, remove the default message
            if (pendingTodoList.querySelector('p')) {
                pendingTodoList.innerHTML = '';
            }

            // Create a new list item to represent the task
            const newItem = document.createElement('li');
            newItem.className = 'list-group-item';
            newItem.textContent = `${task} (Due: ${deadline})`;

            // Create a remove button for the task
            const removeButton = document.createElement('button');
            removeButton.className = 'btn btn-danger btn-sm float-end remove';
            removeButton.textContent = 'X';
            newItem.appendChild(removeButton);

            // Create a complete button for the task
            const completeButton = document.createElement('button');
            completeButton.className = 'btn btn-success btn-sm float-end me-2 complete';
            completeButton.textContent = '✔';
            newItem.appendChild(completeButton);

            // Append the new task item to the pending task list
            pendingTodoList.appendChild(newItem);
            todoInput.value = '';
            deadlineInput.value = '';
            showAlert("Task added successfully!", "success");
        }
        checkEmptyList();
    });

    // Event listener for completing a task
    pendingTodoList.addEventListener('click', function (e) {
        if (e.target && e.target.matches('.complete')) {
            // Toggle the 'checked' class on the parent element of the complete button
            e.target.parentElement.classList.toggle('checked');
            e.target.style.display = 'none';

            // If it's not an empty list, remove the default message
            if (completedTodoList.querySelector('p')) {
                completedTodoList.innerHTML = '';
            }

            // Move the completed task item to the completed task list
            completedTodoList.appendChild(e.target.parentElement);
            showAlert("Task completed successfully!", "success");
            checkEmptyList();
        }
    });

    // Event listener for removing a task from the completed task list
    completedTodoList.addEventListener('click', function (e) {
        if (e.target && e.target.matches('.remove')) {
            // Remove the parent element of the remove button from the DOM
            e.target.parentElement.remove();
            showAlert("Task removed successfully!", "danger");
            checkEmptyList();
        }
    });

    // Event listener for removing a task from the pending task list
    pendingTodoList.addEventListener('click', function (e) {
        if (e.target && e.target.matches('.remove')) {
            // Remove the parent element of the remove button from the DOM
            e.target.parentElement.remove();
            showAlert("Task removed successfully!", "danger");
            checkEmptyList();
        }
    });

    // Check if the task lists are empty initially
    checkEmptyList();
});