(function(){
class Animal implements IAnimal{
    private myprop: string;
    public myprop1: string;
    protected myprop2: string;

    name : string = 'Animal';
    walk(): string {
        return `${this.name} is walking`;
    }

    eat(msg : string | number): string{
        return `${this.name} is eating`;
    }
}


class Dog extends Animal{
    bark(msg : string): void{
        console.log('dog barks '+ msg);
    }
}

const animal =new Animal();
animal.walk();
animal.eat('Animal');

const d =new Dog();
d.bark('biscuit');

interface IAnimal{
    name: string;
    walk(): string;
    eat(msg:string | number): string;
}
})()