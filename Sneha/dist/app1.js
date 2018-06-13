var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    var Animal = /** @class */ (function () {
        function Animal() {
            this.name = 'Animal';
        }
        Animal.prototype.walk = function () {
            return this.name + " is walking";
        };
        Animal.prototype.eat = function (msg) {
            return this.name + " is eating";
        };
        return Animal;
    }());
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Dog.prototype.bark = function (msg) {
            console.log('dog barks ' + msg);
        };
        return Dog;
    }(Animal));
    var animal = new Animal();
    animal.walk();
    animal.eat('Animal');
    var d = new Dog();
    d.bark('biscuit');
})();
