// function doubleIt(num){
//     return num * 2;
// }
// const doubleIt = function myFun(num){
//     return num * 2;
// }

const doubleIt = num => num * 2;
const add = (x,y) => x + y;
const minus = (x,y) => {
    return x - y;
}

const result = doubleIt(50);
const res = add(10,20);
const res1 = minus(20,10);
console.log(res1);