// Function to add a new item
function addTodo() {
    let inputField = document.getElementById("todoInput");
    let inputValue = inputField.value.trim();

    if (inputValue === "") {
        alert("There is noting to add - type in box then click add");
        return;
    }

    let todoList = document.getElementById("todoList");
    let li = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = updateTotalTasks;

    let span = document.createElement("span");
    span.textContent = inputValue;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function () {
        li.remove();
        updateTotalTasks();
    };

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    inputField.value = ""; // Clear input field after adding todo
    updateTotalTasks();
}

// Function to update total tasks count
function updateTotalTasks() {
    let totalTasks = document.querySelectorAll("#todoList li").length;
    document.getElementById("totalTasks").textContent = "Total tasks :- " + totalTasks;
}
