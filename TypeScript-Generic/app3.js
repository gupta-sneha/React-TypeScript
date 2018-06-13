function abc(){
    console.log(this.myname);
}

var obj ={
    myname : 'my obj'
}

abc.call(obj);

function parent(){
    let a =10;
    return function(){
         a = a+1;
        console.log(a);
    }
}

const p = parent();
p();
p();

const p1 = parent();
p1();
p1();
p();

const a ={
    name : 'abc',
    age: 10
};

const b ={
    ...a,
    email:'abc@gmail.com'
}

console.log(b);