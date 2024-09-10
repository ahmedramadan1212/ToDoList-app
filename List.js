// script.ts
document.addEventListener('DOMContentLoaded', function () {
    var taskInput = document.getElementById('taskInput');
    var addTaskButton = document.getElementById('addTaskButton');
    var viewTasksButton = document.getElementById('viewTasksButton');
    var clearTasksButton = document.getElementById('clearTasksButton');
    var taskList = document.getElementById('taskList');
    var tasks = [];
    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach(function (task, index) {
            var li = document.createElement('li');
            li.textContent = task;
            li.dataset.index = index.toString();
            taskList.appendChild(li);
        });
    }
    function showTasks() {
        taskList.classList.remove('hidden');
    }
    function hideTasks() {
        taskList.classList.add('hidden');
    }
    addTaskButton.addEventListener('click', function () {
        var task = taskInput.value.trim();
        if (task) {
            tasks.push(task);
            taskInput.value = '';
            hideTasks(); // إخفاء المهام بعد إضافة مهمة جديدة
        }
    });
    viewTasksButton.addEventListener('click', function () {
        renderTasks();
        showTasks();
    });
    clearTasksButton.addEventListener('click', function () {
        tasks.length = 0;
        renderTasks();
        hideTasks(); // إخفاء قائمة المهام بعد حذفها
    });
    taskList.addEventListener('mouseover', function (event) {
        var target = event.target;
        if (target.tagName === 'LI') {
            target.style.backgroundColor = '#e9ecef';
        }
    });
    taskList.addEventListener('mouseout', function (event) {
        var target = event.target;
        if (target.tagName === 'LI') {
            target.style.backgroundColor = '';
        }
    });
});
