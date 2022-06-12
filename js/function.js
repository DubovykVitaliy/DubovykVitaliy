// let num = 20;

// function showFirstMessage(text){
//     console.log(text);
//     let num = 30;
//     console.log(num);
// }
// showFirstMessage("Hello");
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }
// console.log(calc(4,3));
// console.log(calc(5,8));
// console.log(calc(56,3));

// function ret() {
//     let num = 50;
//     return(num);
// }
// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() {
//     console.log("Hello");
// };
// logger();
// const cal = (a, b) => {
//     console.log("6");
//    return( a + b);
// };

// // OR 
// const calik = (a, b) => a + b;

// const usdCurr = 28;
// const euroCurr = 32;
// const zlotCurr = 6;
// const discount = 0.9;
// // const amount = 500;

// function convert(amount, curr) {
//     return curr * amount;
// }
// function promotion(result) {
//     console.log(result * discount);
// }
// let res = convert(500, usdCurr);
// promotion(res);
// // let u = promotion(res);
// // console.log(u);

// function test(){
//     for(let i = 0; i < 5; i++){
//         console.log(i);
//         if(i === 3) return
//     }
// }
// test();
// console.log("done");

// function doNothing(){}
// console.log(doNothing() === undefined);


function sayHello(name) {
    return `Hello,${name}!`;
}
// sayHello('Alex');
console.log(sayHello('Антон'));

function returnNeighboringNumbers(number) {
    let result = [number - 1, number, number + 1];
    return result;
}
// console.log(returnNeighboringNumbers(5));

// function getMathResult(num, progr) {
//     let result = `${num}`;
//     let calc = num;
//     if(typeof progr != 'number' || progr <= 0){
//         return num;
//     }
//     for(let i = 1; i < progr; i++){
//         calc = calc + num;
//         result += '---';
//         result += calc;
//     }
//     return result;
// }
// console.log(getMathResult(5, 8));

// let str = 'Text';
// let arr = [1, 2, 3,];

// console.log(str.toLowerCase());
// console.log(str);

// let fruit = 'Some fruit';
// console.log(fruit.indexOf('fruit'));

// const logg = "Hello world";
// // console.log(logg.slice(-5));

// console.log(logg.substr( 6, 5));

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseFloat(test));
console.log(parseInt(test));