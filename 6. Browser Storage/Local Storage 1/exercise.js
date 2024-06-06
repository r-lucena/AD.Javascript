const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveUserToLocalStorage(user) {
  const userJSON = JSON.stringify(user);

  localStorage.setItem("user", userJSON);
}
function printUserFromLocalStorage() {
  const userJSON = localStorage.getItem("user");

  if (userJSON) {
    const userData = JSON.parse(userJSON);

    console.log(userData);
  } 
}

saveUserToLocalStorage(user);
printUserFromLocalStorage();
