function test () {
    console.log("Hola!");
    setTimeout(() => {
        console.log("Ruben");
    }, 1000)
}

setTimeout(test, 1000)