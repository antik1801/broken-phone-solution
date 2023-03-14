// const num = 10;
// num();
// let x= 10;
// x= y+5;
// console.log(x);
// const obj = {name: 'john'}
// Object.keys(obj).forEach(prop => console.log(prop));
// const name = 'john';
// name.toUpperCase = () => "JOHN";
// console.log(name.toUpperCase());
// const arr = [1,2,3]
// arr.slice(-2, 0);

// setTimeout(() => {
//     console.log('showing after')
// }, 3500);
// setInterval(() => {
//     console.log(Math.floor(Math.random()*10));
// }, 1000);

function a(){
    console.log('a');
    b();
    console.log('aa');
}
function b(){
    console.log('b');
    c();
    console.log('bb');
}
function c(){
    console.log('c');
    console.log('cc');
}

a();
/*
a b c cc bb

a b bb c cc
*/