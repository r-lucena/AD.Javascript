async function fetchTodos() {
        const  todos= await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await todos.json();
        console.log(data);
}
fetchTodos()