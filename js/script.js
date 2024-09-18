const inputText = document.getElementById("task");
const taskContainer = document.getElementById("tasks-container");

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
        
        saveData(); // Save data after adding the task

        // Event listener for removing the task
        finishBtn.addEventListener('click', function(e) {
            e.target.parentNode.remove();
            saveData(); // Save data after removing the task
        });

        // Event listener for toggling the line-through on the task
        span.addEventListener('click', function(e) {
            if(e.target.style.textDecoration == "line-through"){
                e.target.style.textDecoration = "none";
            } else {
                e.target.style.textDecoration = "line-through";
            }
            saveData(); // Save data after toggling the text decoration
        });
    }
    inputText.value = "";
}

function saveData(){
    localStorage.setItem("data", taskContainer.innerHTML);
}

function loadData(){
    taskContainer.innerHTML = localStorage.getItem("data");

    // Reattach event listeners for the loaded tasks
    document.querySelectorAll(".finishBtn").forEach(button => {
        button.addEventListener('click', function(e) {
            e.target.parentNode.remove();
            saveData();
        });
    });

    document.querySelectorAll("li span").forEach(span => {
        span.addEventListener('click', function(e) {
            if(e.target.style.textDecoration == "line-through"){
                e.target.style.textDecoration = "none";
            } else {
                e.target.style.textDecoration = "line-through";
            }
            saveData();
        });
    });
}

document.querySelector(".deleteAll").addEventListener('click', function() {
    taskContainer.innerHTML = '';
    saveData();
});

// Load data from localStorage on page load
loadData();
