const test1 = ["bad", "bad", "bad"];
const test2 = ["good", "bad", "bad", "bad", "bad", "good"];
const test3 = ["good", "bad", "bad", "good", "bad", "good"];

function comprobarIdeas(array) {
  let goodIdeas = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == "good") {
      goodIdeas++;
    }}
    
    if (goodIdeas === 0) {
      return "Mal!";
    } else if (goodIdeas <= 2) {
      return "Bien!";
    } else {
      return "Perfecto!";
    }
  
}

console.log(comprobarIdeas(test1)); // "Mal!"
console.log(comprobarIdeas(test2)); // "Bien!"
console.log(comprobarIdeas(test3)); // "Perfecto!"
