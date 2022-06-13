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


// function sayHello(name) {
//     return `Hello,${name}!`;
// }
// // sayHello('Alex');
// console.log(sayHello('Антон'));

// function returnNeighboringNumbers(number) {
//     let result = [number - 1, number, number + 1];
//     return result;
// }
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

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// console.log(parseFloat(test));
// console.log(parseInt(test));


function calculateVolumeAndArea(edge){
    if(isNaN(edge) || edge <= 0 || !Number.isInteger(edge)){
        return `При вычислении произошла ошибка`;
    }else {
        let v = edge * edge * edge;
    let s = 6 * (edge * edge);
    return `Объем куба: ${v}, площадь всей поверхности: ${s}`;
    }
}
console.log(calculateVolumeAndArea(15));

function getCoupeNumber(place) {
    if(isNaN(place) || place <0 || !Number.isInteger(place)){
        return "Ошибка. Проверьте правильность введенного номера места";
    }else if (place == 0 || place > 36) {
        parseInt(place);
        return "Таких мест в вагоне не существует";
    }else{parseInt(place);
    return Math.trunc((place - 1) / 4) + 1;
    }
}




function getTimeFromMinutes(mins) {
    const hours = parseInt(mins / 60),
     lastHour = Number(hours.toString().slice(-1)),
     leftMins = mins % 60,
     lastmin = Number(leftMins.toString().slice(-1));
    let hoursEnding = '',
     leftMinsEnding = '';

    if(isNaN(mins) || mins < 0 || !Number.isInteger(mins)){
        return "Ошибка, проверьте данные";
    }

    if(hours === 0 ||lastHour === 0 || lastHour === 5 || lastHour === 6 || lastHour === 7 || lastHour === 8 || lastHour === 9){
        hoursEnding = 'ов';
    }else if(lastHour === 2 || lastHour === 3 || lastHour === 4){
        hoursEnding = 'а';
    }

    if(lastmin === 1){
        leftMinsEnding = 'а';
    } else if(lastmin === 2 || lastmin === 3 || lastmin === 4){
        leftMinsEnding = 'ы';
    } 

    return `Это ${hours} час${hoursEnding} и ${leftMins} минут${leftMinsEnding}`;
    
}
console.log(getTimeFromMinutes(6.77));




function findMaxNumber(a, b, c, d) {
    if(typeof(a) !== "number" ||
     typeof(b) !== "number" ||
     typeof(c) !== "number" ||
     typeof(d) !== "number"){
        return 0;
    }else {
        console.log(Math.max(a, b, c, d));
        return Math.max(a, b, c, d);
    }
}
findMaxNumber(54, 9, 45, 46);
