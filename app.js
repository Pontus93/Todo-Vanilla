// QuerySelectors & focus on text input
const addTodoInput = document.querySelector(".addTodoInputField");
const todoList = document.querySelector(".toDoList");
addTodoInput.focus();

// Check if not empty then start our next function with the value of input
addTodoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (addTodoInput.value.length > 0) {
        addTodo(addTodoInput.value);
    }
});

// Add todo and reset for new text input
function addTodo(todoText) {
    todoList.insertAdjacentHTML(
        "beforeend",
        `<li class="liItem" onclick="completeTodo(this)">${todoText}
        <icon class="icon" onclick="deleteTodo(this)">
        <i class='fa fa-trash'></i></icon></li>`
    );
    addTodoForm.reset();
    store();
}

// Delete function & set focus on text input
function deleteTodo(element) {
    element.parentElement.remove();
    addTodoInput.focus();
    store();
}

// when list-item is completed
function completeTodo(element) {
    element.classList.toggle("line");
    addTodoInput.focus();
    store();
}

// localstorage for todos
function store() {
    window.localStorage.liItem = todoList.innerHTML;
}

function getValues() {
    let storedValues = window.localStorage.liItem;
    if (!storedValues) {
    }
    else {
        todoList.innerHTML = storedValues;
    }
}
getValues();

