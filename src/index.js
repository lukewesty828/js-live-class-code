

let state = {
    todos: [
        { title: 'first todo', complete: false }, 
        { title: 'second todo', complete: true }, 
        { title: 'third todo', complete: false } 
    ], 
    areCompletedVisible: true,
};

// entry point into the DOM
const actualList = document.querySelector('#actualList');
const filter = document.querySelector('#filter');



function render(todos) {
    actualList.innerHTML = '';

    // iterate over todos in state add list items
    todos.forEach(todo => {
        // create html list item
        const li = document.createElement('li');
        li.textContent = todo.title;

        if (todo.complete) {
            li.classList = 'todo--complete';
        }
        
        // add item to actualList
        actualList.appendChild(li);

    });
}

function toggleFilter() {
    if (state.areCompletedVisible) {
        const filteredTodos = state.todos.filter(todo => !todo.complete);
        render(filteredTodos);
    } else {
        render(state.todos);
    }
    state.areCompletedVisible = !state.areCompletedVisible;
}
filter.addEventListener('click', toggleFilter);

render(state.todos);
