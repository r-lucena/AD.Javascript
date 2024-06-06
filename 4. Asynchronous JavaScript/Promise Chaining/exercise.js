const isLogged = true;

const firstPromise = new Promise ((resolve, reject) => {
    if (isLogged) {
        console.log("User is logged");
        const randomNumber = Math.random()
        console.log(randomNumber);
        const randomNumberFixed = randomNumber.toFixed(1)
        resolve(randomNumberFixed) 
    }else {
        reject("This number is not bigger than 0.5")
    }
})


const secondPromise = (number) => {
    console.log("Number:", number);
    return new Promise ((resolve, reject) => {
        if (number > 0.5){
            console.log("The number is greater than 0.5");
            resolve(({name: "John", age: 24}))
        } else {
            console.log("Number is smaller than 0.5");
            reject("Error")
        }
    })
}

firstPromise
.then((response) => secondPromise(response))
.then((result) => console.log(result))
.catch((error) => console.error(error))
// firstPromise.then(res => console.log(res));