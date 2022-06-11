"use strict";


// let num = 50;

// while(num <= 55){
//     console.log(num);
//     num++;
// }

// // do {
// //     console.log(num);
// //     num++;
// // }
// // while (num < 55);

// // for (let i = 1; i <= 20; i++) {
// //     if (i%2 === 1){
// //         // break;
// //         continue;
// //     }
// //     console.log(i);
// // }

// // for (let i = 0; i < 3; i++){
// //     console.log(i);
// //     for (let j = 0; j < 3; j++){
// //         console.log(j);
// //     }
// // }


// // let result = '';
// // const lenght = 7;

// // for (let i = 1; i < lenght; i++){

// //     for (let j = 1; j <= i; j++){
// //         result += '*';
// //     }
    
// //     result += '\n';
// // }
// // for (let i = 1; i < lenght; i++){

// //     for (let j = lenght-1-i; j > 0; j--){
// //         result += '*';
// //     }
    
// //     result += '\n';
// // }
// // console.log(result);

// first: for (let i = 0; i < 3; i++){
//     console.log(`first level ${i}`);
//     for (let j = 0; j < 3; j++){
//         console.log(`second level ${j}`);
//         for (let k = 0; k < 5; k++){
//             if (k === 2) {break first;}
//             console.log(`third level ${k}`);
//         }
//     }
// }



// let result = '';
// const lenght = 7;


// for (let i = 1; i < lenght; i++){

//     for (let j = 1; j <= i; j++){
//         result += '*';
//     }
    

//     result += '\n';
// }


// for(let i = 2; i < 11; i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }

// for (let i = 2; i <= 16; i++) {
//         if (i % 2 === 0) {
//             continue;
//         } else {
//             console.log(i);
//         }
//     }


    
// let i = 1;
// while (i <= 15) {
//     i++;
//     if (i % 2 === 0){
//         continue;
//     }else{
//     console.log(i);
    
//     }
    
// }
// const arrayOfNumbers = [];

// let j = 0;
// for (let i = 5; i <=10; i++) {
   
//     arrayOfNumbers[j] = i;
//     j++;
// }
// // console.log(arrayOfNumbers);

// const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];
//     for(let i = 0; i< arr.length; i++){
//         let a = arr[i];
//         result[i] = a;
        
//     }
//     console.log(result);

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// for(let i = 0; i < data.length; i++){
//     if(data[i] * 2){
//         // let a =data[i];
//         data[i] = data[i] * 2;
//     } else {
//         data[i] = data[i] += ' - done';
//     }
// }
// console.log(data);


// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];
// for(let i = 0; i < data.length; i++){
//     let a = data[i];

//     result[data.length - i - 1] = a;
// }
// console.log(result);


const lines = 5;
let result = '';
for( let i = 0; i <= lines; i ++){
    for(let j = lines; j > i; j--){
        result += ' ';
    }
    for(let k = 0 ;k <= i; k++){
        result += '*';
    }
    for(let a = 1; a <= i; a++){
        result += '*';
    }
    result += '\n';
}
console.log(result);

// for (let i = 1; i < lenght; i++){

//     for (let j = 1; j <= i; j++){
//         result += '*';
//     }
    

//     result += '\n';
// }