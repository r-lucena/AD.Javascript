function repeatHello (callback) {
   const intervalID = setInterval(callback,1000);
   setTimeout(() => {
    clearInterval (intervalID)
   }, 5000)
   
}
repeatHello(() => console.log("Hello"));
