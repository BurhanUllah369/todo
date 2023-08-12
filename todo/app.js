document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addBtn = document.getElementById('addBtn');
    const todoList = document.getElementById('todoList');

    addBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            showError('Please add something');
            return;
        }

        const todoItem = createTodoItem(taskText);
        todoList.appendChild(todoItem);
        taskInput.value = '';
    });

    todoList.addEventListener('click', (event) => {
        const target = event.target;
        if (target.tagName === 'IMG' && target.src.includes('unchecked.png')) {
            target.src = 'images/checked.png';
            const todoItem = target.parentElement;
            const taskText = todoItem.querySelector('p');
            taskText.style.textDecoration = 'line-through';
        } else if (target.classList.contains('deleteBtn')) {
            const todoItem = target.parentElement;
            todoList.removeChild(todoItem);
        }
    });

    function createTodoItem(text) {
        const todoItem = document.createElement('li');
        todoItem.innerHTML = `
            <img src="images/unchecked.png" alt="">
            <p>${text}</p>
            <i class="fa-solid fa-xmark deleteBtn"></i>
        `;
        return todoItem;
    }

    function showError(message) {
        const error = document.createElement('p');
        error.textContent = message;
        error.className = 'error';
        document.querySelector('.wrapper').insertBefore(error, todoList);
        setTimeout(() => {
            document.querySelector('.wrapper').removeChild(error);
        }, 1000);
    }
});
 