'use strict'

const todo_control = document.querySelector('.todo-control'),
    header_input = document.querySelector('.header-input'),
    todo_list = document.querySelector('.todo-list'),
    todo_completed = document.querySelector('.todo-completed');

    let todo_data;

    if (localStorage.todo_data) {
        todo_data = JSON.parse(localStorage.todo_data)
    } else {
        todo_data = [];
    }

const addToDo = function() {

    todo_list.textContent = '';
    todo_completed.textContent = '';

    todo_data.forEach(function(item, i){

        let li = document.createElement('li');
        li.classList.add('todo-item');

        li.innerHTML = `<span class="text-todo">${item.value}</span>
        <div class="todo-buttons">
            <button class="todo-remove"></button>
            <button class="todo-complete"></button>
        </div>`;

        if (item.completed) {
            todo_completed.append(li);
        } else {
            todo_list.append(li);
        }

        const btn_todo_complete = li.querySelector('.todo-complete');
        const btn_todo_remove = li.querySelector('.todo-remove');

        btn_todo_complete.addEventListener('click', function(event) {
            item.completed = !item.completed;
            addToDo();
        });

        btn_todo_remove.addEventListener('click', function(event) {
            todo_data.splice(i, 1);
            addToDo();
        });

    });

    localStorage.todo_data = JSON.stringify(todo_data);

};

todo_control.addEventListener('submit', function(event) {
    event.preventDefault();

    if (header_input.value.trim() != '') {
        let new_todo = {
            value: header_input.value,
            completed: false,
        }

        todo_data.push(new_todo);

        addToDo();

        header_input.value = '';
    }

})

addToDo();