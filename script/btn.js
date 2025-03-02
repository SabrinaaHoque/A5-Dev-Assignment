
const completedButtons = document.querySelectorAll('.completed-button');
const taskAssignedCount = document.querySelector('#task-assigned-count');
const completedTaskCount = document.querySelector('#completed-task-count');
const msgBox = document.querySelector('#msg-box');
const clearBtn = document.querySelector('#clear-his-btn');

let assignedCount = parseInt(taskAssignedCount.textContent);
let completedCount = parseInt(completedTaskCount.textContent);


completedButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert("alert is shown");
    button.disabled = true;

    assignedCount--;
    taskAssignedCount.textContent = assignedCount;

    completedCount++;
    completedTaskCount.textContent = completedCount;
    msgBox.textContent="task completed successfully"
  });
});
clearBtn.addEventListener('click', () => {
     msgBox.textContent=" ";
});
