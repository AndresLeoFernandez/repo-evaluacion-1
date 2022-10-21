// Ejercicio 1:
//Resolucion planteada
/* 
* Para optimizarlo utilizaria herencia y polimorfismo.
* 1- Crear una clase Animal.
* 2- Que la clase Dog herede de Animal.
* 3- Que la clase Cat herede de Animal.
* 4- Mediante el uso de polimorfismo redeclaro la funcion makeSound para cada una de las clases con 
*    el sonido que le corresponde a cada animal.
*
*/
export default class Animal {
    protected name: string;

    public constructor(name: string) {
        this.name = name;
    }
}

class Dog extends Animal {
    public constructor(name: string){
        super(name);
    }
    public makeSound(): void {
        console.log('wuff wuff\n');
    }
}

class Cat extends Animal {
    public constructor(name: string) {
      super(name);
    }
    public makeSound(): void {
      console.log('meow meow\n');
    }
}
/*Main*/
let minino: Cat = new Cat('Pocky');
minino.makeSound(); // -> meow meow
let firulais: Dog = new Dog('Pocky');
firulais.makeSound(); // -> wuff wuff