class Person {
    constructor(nombre, edad) {
        this._nombre = nombre;
        this._edad = edad;
    }

    get nombre (){
        return this._nombre
    }
    set nombre2 (nuevoNombre) {
        this._nombre = nuevoNombre;
    }
}

let persona1 = new Person ("Ruben", 20)
let persona2 = new Person ("Zikko", 20)

console.log(persona1, persona2);
persona1.nombre2 = "Carla";
console.log(persona1.nombre);
console.log(persona1)