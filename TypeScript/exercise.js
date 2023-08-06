var num1 = 8;
var num2 = 16;
var min = (num1 > num2) ? num1 : num2;
// while loop
while (true) {
    if (min % num1 == 0 && min % num2 == 0) {
        console.log("The LCM of ".concat(num1, " and ").concat(num2, " is ").concat(min));
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
