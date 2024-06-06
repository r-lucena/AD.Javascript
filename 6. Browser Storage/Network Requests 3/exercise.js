async function fetchTodo() {
    const link = 'https://jsonplaceholder.typicode.com/todos/4';
    
    
      
      const response = await fetch(link);
      const todo = await response.json();

     
      const title = document.createElement('h2');
      title.textContent = todo.title;

    
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = todo.completed;

     
      const container = document.getElementById('container');
      container.appendChild(titleElement);
      container.appendChild(checkboxElement);
  }
  fetchTodo();