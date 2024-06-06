const number = 15;

const num = new Promise ((resolve, reject) => {
    if (number > 10) {
        resolve("This number is bigger than 10")
    } else {
        reject("This number is smaller than 10")
    }
});

num
.then((response) => console.log(response))
.catch((error) => console.error(error));