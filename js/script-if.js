"use strict";

const num = '50';


if (1){
    console.log('ok');
} else {
    console.log('error');
}

if (num < 49){
    console.log('error');
} else if (num > 100) {
    console.log('too much');
} else {
    console.log('ok!');
}

(num === 50) ? console.log('ok!') : console.log('error');
switch (num) {
    case '49':
        console.log('error');
        break;
    case '100':
        console.log('error');
        break;
    case '20':
        console.log('OK!');
        break;
    default:
        console.log("don't luck");
}