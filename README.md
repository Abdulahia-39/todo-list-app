# Todo List Application

### Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Code Overview](#code-overview)
  - [HTML](#html)
  - [JavaScript](#javascript)
- [Local Storage](#local-storage)
- [Future Enhancements](#future-enhancements)

---

## Overview

This is a simple, interactive **Todo List Application** built with HTML, CSS, and JavaScript. It allows users to add tasks, mark them as completed (by toggling a line-through effect), and remove tasks either individually or all at once. The tasks are stored in the browser's `localStorage`, ensuring persistence across page reloads.

---

## Features

- **Add Tasks**: Users can add tasks using the input field and pressing the "Add" button.
- **Mark Tasks as Completed**: Clicking on a task toggles the `line-through` effect, allowing users to mark tasks as done or undone.
- **Remove Tasks**: Each task has a "Remove" button that deletes it from the list.
- **Delete All Tasks**: A "Delete All" button allows users to clear the entire list of tasks.
- **Persistent Storage**: The list of tasks is saved in `localStorage`, ensuring tasks remain after the page is reloaded.

---

## Installation

1. **Clone the Repository**:
   ```
   git clone https://github.com/your-username/todo-list-app.git
   ```
2. **Navigate to the Project Directory**:
   ```
   cd todo-list-app
   ```
3. **Open `index.html`** in your web browser:
   ```
   open index.html
   ```

---

## Usage

1. Open the application in a web browser.
2. In the input field, type in a task and press the "Add" button to add it to the list.
3. Click on a task to toggle the completion status (it will have a strikethrough when completed).
4. Use the "Remove" button next to a task to delete it.
5. To remove all tasks, click on the "Delete All" button at the bottom of the page.

---

## Code Overview

### HTML

The structure of the Todo List is created using HTML. The main elements include:

- An input field for users to add tasks.
- A button to trigger the `addTask()` function.
- A `<ul>` element with the id `tasks-container` to hold the list of tasks.
- A "Delete All" button to clear all tasks.

```html
<div class="container">
  <h1>To-do list</h1>
  <div class="form">
    <input id="task" type="text" placeholder="Add your task" autocomplete="off" required />
    <input type="button" value="add" onclick="addTask()" />
  </div>
  <ul id="tasks-container"></ul>
  <div class="btn">
    <button class="deleteAll">delete all</button>
  </div>
</div>
```

### JavaScript

The JavaScript code provides the interactive functionality, including adding, deleting, and marking tasks as completed. Key functions include:

- **addTask()**: Adds a new task to the list and sets up event listeners for marking tasks as complete or removing them.
- **saveData()**: Saves the current task list in `localStorage` to ensure persistence.
- **loadData()**: Loads tasks from `localStorage` when the page is reloaded and reattaches event listeners.
- **Event Listeners**: 
  - For the "Remove" button to delete individual tasks.
  - For toggling the completion status of tasks.
  - For the "Delete All" button to clear all tasks.

Example JavaScript:

```javascript
function addTask() {
    if(inputText.value == '') {
        alert("You must write something");
    } else {
        let finishBtn = document.createElement("button");
        finishBtn.innerHTML = "remove";
        finishBtn.classList.add("finishBtn"); 

        let li = document.createElement("li");
        let span = document.createElement("span");
        span.innerHTML = inputText.value;
        li.appendChild(span);
        li.appendChild(finishBtn);
        taskContainer.appendChild(li);
        
        saveData(); 

        finishBtn.addEventListener('click', function(e) {
            e.target.parentNode.remove();
            saveData();
        });

        span.addEventListener('click', function(e) {
            e.target.style.textDecoration = e.target.style.textDecoration == "line-through" ? "none" : "line-through";
            saveData();
        });
    }
    inputText.value = "";
}
```

### Local Storage

This application uses `localStorage` to persist the task list even when the browser is refreshed or closed. The tasks are saved as HTML strings in the browser's storage.

- **saveData()**: Saves the entire contents of the task list (including event listeners) as a string in `localStorage`.
- **loadData()**: Loads the task list from `localStorage` on page load and reattaches event listeners to the tasks.

```javascript
function saveData() {
    localStorage.setItem("data", taskContainer.innerHTML);
}

function loadData() {
    taskContainer.innerHTML = localStorage.getItem("data");

    // Reattach event listeners for loaded tasks
    document.querySelectorAll(".finishBtn").forEach(button => {
        button.addEventListener('click', function(e) {
            e.target.parentNode.remove();
            saveData();
        });
    });

    document.querySelectorAll("li span").forEach(span => {
        span.addEventListener('click', function(e) {
            e.target.style.textDecoration = e.target.style.textDecoration == "line-through" ? "none" : "line-through";
            saveData();
        });
    });
}
```

---

## Future Enhancements

- **Edit Task**: Add functionality to allow users to edit tasks after they are added.
- **Due Date**: Add an option for setting due dates for tasks.
- **Task Categories**: Allow users to organize tasks into different categories.
- **Improved UI**: Enhance the design for a more polished and intuitive user experience.

Feel free to contribute or modify the application for additional features!