async function recoverTodos() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos");
  // console.log(data);
  const parse = JSON.stringify(data);
  const todos = await data.json();
  // let idToDo;
  // todos.forEach(todo => {
  //     if(todo.id == 6)
  //     idToDo = todo
  // });

  // console.log(idToDo);

  const list = todos.filter((todo) => {
    return todo.completed == false;
  });
  return list;
}
recoverTodos()
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log("Process not finished");
  });
