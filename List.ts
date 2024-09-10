// script.ts

document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('taskInput') as HTMLInputElement;
  const addTaskButton = document.getElementById('addTaskButton') as HTMLButtonElement;
  const viewTasksButton = document.getElementById('viewTasksButton') as HTMLButtonElement;
  const clearTasksButton = document.getElementById('clearTasksButton') as HTMLButtonElement;
  const taskList = document.getElementById('taskList') as HTMLUListElement;

  const tasks: string[] = [];

  function renderTasks() {
      taskList.innerHTML = '';
      tasks.forEach((task, index) => {
          const li = document.createElement('li');
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

  addTaskButton.addEventListener('click', () => {
      const task = taskInput.value.trim();
      if (task) {
          tasks.push(task);
          taskInput.value = '';
          hideTasks(); // إخفاء المهام بعد إضافة مهمة جديدة
      }
  });

  viewTasksButton.addEventListener('click', () => {
      renderTasks();
      showTasks();
  });

  clearTasksButton.addEventListener('click', () => {
      tasks.length = 0;
      renderTasks();
      hideTasks(); // إخفاء قائمة المهام بعد حذفها
  });

  taskList.addEventListener('mouseover', (event) => {
      const target = event.target as HTMLElement;
      if (target.tagName === 'LI') {
          target.style.backgroundColor = '#e9ecef';
      }
  });

  taskList.addEventListener('mouseout', (event) => {
      const target = event.target as HTMLElement;
      if (target.tagName === 'LI') {
          target.style.backgroundColor = '';
      }
  });
});
