// Wait for the HTML document to be fully loaded
$(document).ready(function () {

    // Function to show alert messages
    const showAlert = (message, type) => {
        // Create an alert div with appropriate classes and button for dismissing
        const alert = $('<div>')
            .addClass(`alert alert-${type} alert-dismissible fade show`)
            .attr('role', 'alert')
            .html(`${message}<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`);

        // Append the alert div at the beginning of the alertContainer
        $('#alertContainer').prepend(alert);

        // Automatically remove the alert div after 2 seconds
        setTimeout(() => {
            alert.remove();
        }, 2000);
    };

    // Function to check whether the list of tasks is empty or not
    const checkEmptyList = () => {
        // If there's no list item in the pendingTodoList, show a message
        if (!$('#pendingTodoList li').length) {
            $('#pendingTodoList').html("<p>You don't have any pending tasks yet.</p>");
        }
        // If there's no list item in the completedTodoList, show a message
        if (!$('#completedTodoList li').length) {
            $('#completedTodoList').html("<p>You haven't completed any tasks yet.</p>");
        }
    };

    // Listen to the click event on the addTodoBtn button
    $('#addTodoBtn').click(function () {
        // Get the values of task and deadline from input fields
        const task = $('#todoInput').val();
        const deadline = $('#deadlineInput').val();

        // If both task and deadline values exist
        if (task && deadline) {
            // If there's a message paragraph in pendingTodoList, remove it
            if ($('#pendingTodoList p').length) {
                $('#pendingTodoList').html('');
            }

            // Create a new list item with task and deadline
            const newItem = $('<li>')
                .addClass('list-group-item')
                .text(`${task} (Due: ${deadline})`);

            // Create a remove button and append it to the new list item
            const removeButton = $('<button>')
                .addClass('btn btn-danger btn-sm float-end remove')
                .text('X');
            newItem.append(removeButton);

            // Create a complete button and append it to the new list item
            const completeButton = $('<button>')
                .addClass('btn btn-success btn-sm float-end me-2 complete')
                .text('✔');
            newItem.append(completeButton);

            // Append the new list item to the pendingTodoList
            $('#pendingTodoList').append(newItem);

            // Clear the task and deadline input fields
            $('#todoInput').val('');
            $('#deadlineInput').val('');

            // Show success alert
            showAlert("Task added successfully!", "success");
        }
        // Check the list after adding a new task
        checkEmptyList();
    });

    // Listen to the click event on the complete button within the pendingTodoList
    $('#pendingTodoList').on('click', '.complete', function () {
        // Toggle checked class on the list item and hide the complete button
        $(this).parent().toggleClass('checked');
        $(this).css('display', 'none');

        // If there's a message paragraph in completedTodoList, remove it
        if ($('#completedTodoList p').length) {
            $('#completedTodoList').html('');
        }

        // Move the completed task to the completedTodoList
        $('#completedTodoList').append($(this).parent());

        // Show success alert
        showAlert("Task completed successfully!", "success");

        // Check the list after completing a task
        checkEmptyList();
    });

    // Listen to the click event on the remove button within the completedTodoList
    $('#completedTodoList').on('click', '.remove', function () {
        // Remove the list item
        $(this).parent().remove();

        // Show danger alert
        showAlert("Task removed successfully!", "danger");

        // Check the list after removing a task
        checkEmptyList();
    });

    // Listen to the click event on the remove button within the pendingTodoList
    $('#pendingTodoList').on('click', '.remove', function () {
        // Remove the list item
        $(this).parent().remove();

        // Show danger alert
        showAlert("Task removed successfully!", "danger");

        // Check the list after removing a task
        checkEmptyList();
    });

    // Run checkEmptyList function initially to show the correct message
    checkEmptyList();
});