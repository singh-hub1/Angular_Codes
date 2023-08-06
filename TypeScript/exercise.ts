export{}
const num1 = 8;
const num2 = 16;

let min = (num1 > num2) ? num1 : num2;

// while loop
while (true) {
    if (min % num1 == 0 && min % num2 == 0) {
        console.log(`The LCM of ${num1} and ${num2} is ${min}`);
        break;
    }
    min++;
}


/*

for (let i = 10; i <= 100; i++) {
    let flag = 0;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1.
    if (i > 1 && flag == 0) {
        console.warn(i);
    }
}
*/


/*
var a="AAA";
var check=a;
var flag=true;
var j=a.length-1;
for(let i=0; i<j/2; i++) {
let x=a[i];
let y=a[j-1];

if(x!=y)
{
flag =false;
}
}
flag = true;

if(flag==true){
    console.log("given string is pallindrome!!");
}
else{
    console.log("given string is not pallindrome!!");
}
*/

function rectangleLength(n1:number,n2:number){
    return n1+n2;
}
let length=rectangleLength(1,2);
console.log(length);



function rectangleBreadth(n1:number,n2:number){
    return n1*n2;
}
let breadth=rectangleBreadth(10,20);
console.log(breadth);

console.log("the total length of the rectangle is ::",length+breadth);