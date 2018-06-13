(function(){


let l:string;
l = "fdffg";

const a: string="asdf";
const a1: string ="asdf";
const b: number=10;
const b1: number=10;
const c:boolean = true;
const c1:Boolean=true;
const d: object = {};
const d1: object ={};
const e :object ={
    kkk:"some value"
};

let someVar: string | number ='aa';


const arr :Array<String> = ['aa','bb'];
const arr1 : string[] = ['aa','bb'];
const users: Array<Object>=[
    {
        name:'aaa',
        age: 10
    },
    {
        name:'bob',
        age:10
    }    
];

const arrAny : Array<any> = [10, 'aa', true];

interface IUser {
    name:string;
    age:number;
}

const usr :IUser={
    name:'asdf',
    age:11
}

let usrs:Array<IUser>=[
    {
        name:'arr',
        age:10
    }
];

usrs.push({
    name : 'test',
    age:10
});


function add(x, y){
    return x + y;
}

const add1 = (x, y) => x + y;

function typeAdd(x: number, y:number) : number {
    return x + y;
}

const typeAdd1= (x: number, y: number) :number=> x + y;

function log(msg: string): void {
    console.log(msg);
}

const h=log('Hello');


// Interface

interface IUtil{
    name:string;
    log(msg:string):string;
}

const util : IUtil = {
    name: 'hello',
    log : (msg: string): string => {
        return msg + this.name
    }
}

const util1 : IUtil = {
    name: 'hello',
    log : function(msg: string): string {
        return msg + util1.name
    }
}

//console.log(util1);
console.log(util1.log('Test'));
})()