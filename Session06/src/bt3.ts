abstract class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return `Tên: ${this.name}`;
    }

    abstract makeSound(): void;
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Gâu gâu");
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log("Meo meo");
    }
}

const dog = new Dog("Cún");
console.log(dog.getName()); 
dog.makeSound(); 

const cat = new Cat("Miu");
console.log(cat.getName());
cat.makeSound();