var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class Animal {
    constructor() {
        this.name = 'Animal';
    }
    walk() {
        console.log(this.name + ' is walking');
    }
}
__decorate([
    logger
], Animal.prototype, "walk", null);
//Decorators
function logger(target, name, descriptor) {
    const originalFn = descriptor.value;
    descriptor.value = function () {
        console.log(name + ' is being executed');
        originalFn.call(this);
    };
    return descriptor;
}
const a = new Animal();
a.walk();
