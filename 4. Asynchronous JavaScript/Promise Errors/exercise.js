const isLogged = true;

const firstPromise = new Promise((resolve, reject) => {
  if (isLogged === true) {
    resolve(Math.random());
  } else {
    reject(new Error("isLogged is not true"));
  }
});

const secondPromise = (number) => {
  return new Promise((resolve, reject) => {
    if (number > 0.5) {
      resolve({ name: "John", age: 24 });
    } else {
      reject(new Error("Number is less than 0.5"));
    }
  });
};

firstPromise
  .then(secondPromise)
  .then((result) => console.log(result))
  .catch((error) => {
    console.error("Error in promise chain:", error.message)
  })
  .finally(() => {
    console.log("Promise chain completed.")
    
  });