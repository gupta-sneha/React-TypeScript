class Animal{
    name: string = 'Animal';
    @logger
    walk(){
        console.log(this.name + ' is walking');
    }
}

//Decorators
function logger(target, name, descriptor){
    const originalFn = descriptor.value;
    descriptor.value = function(){
        console.log(name + ' is being executed');
        originalFn.call(this);
    }
    return descriptor;
}

const a = new Animal();
a.walk();