/*
let n1=10; //initiaization is not needed
const n2=20;//initialization is needed

//how to write type annotation in typescript

// let variablename:type;
// let variablename:type = value;
// const constatntname:type = value;

let name1:string="vishal";
let age:number=22;
let student:boolean=false;

console.log(name1);
console.log(age);
console.log(student);

let num1:number=0.44;
let hex:number=0xbcce;
let bin:number=0b001;

let introduction =`backtick
allows to use
lines`;

console.log(introduction);

let intro :string=`I' m ${name1}`;
console.log(intro);


let nu:null=null;
let ud:undefined=undefined;

let num:number[]=[1,2,3,45,5];
let num3:Array<number>=[1,2,3,4,5];
let studentnames:string[]=['vishal','jasu','sham'];

studentnames.push('aditi'); //It will push in last column i.e stack
console.log(studentnames)



//SYNTAX OF FUNCTION

// function  function_name(parameter:type,parameter:type,...):
// returntype{
//     //body of the function
// }


//FUNCTION WITH RETURN TYPE::

// function sumFUN(n1:number,n2:number):number{
//     return n1+n2
// }
// let sumVar=sumFUN(1,2);
// console.log(sumVar);


//FUNCTION WITHOUT RETURN TYPE
// function sumFUN(n1:number,n2:number){
//     return n1+n2
// }
// let sumVar=sumFUN(1,2);
// console.log(sumVar);


//TYPESCRIPT FUNCTION TYPES (ARROW FUNCTION)
// (parameter:Type,parameter:Type,...)=>type

let sum2:(num11:number,num22:number)=>number;
sum2=function(num11:number,num22:number){
    return num11+num22;
}
let res=sum2(11,22);
console.log(res);



let sum3:(num11:number,num22:number)=>
number =
function(num11:number,num22:number){
    return num11+num22;
};
let res1=sum3(122,122);
console.log(res1);



//Optional Parameter
function sum4(n1:number,n2:number,n3?:number):number{
    if(typeof n3!=='undefined')
    {
        return n1+n2+n3;
    }
return n1+n2;
}

let res4=sum4(100,200,100);
console.log(res4);


//Default Parameter
// function name(para1:type=defaultValue1,para2:type=defaultValue2,...)
// {
//     //body of the function
// }

function defaultSum(n1:number,n2:number=7){
    return n1+n2;
}
let res5=defaultSum(20);
console.log(res5);

//REST parameters

// function func_name(...rest:type[]){
//     //body of the function
// }

function restpara(...num:number[]):number{
    let sumofnum=0;
    num.forEach((num)=>sumofnum+=num);
    return sumofnum;
}

console.log(restpara());
console.log(restpara(120,20));
console.log(restpara(120,20,135));

*/
//HomeWork ::Writing a functionn to print Prime Numbers with Range.
// const lowerNumber = parseInt(prompt('Enter lower number: '));
// const higherNumber = parseInt(prompt('Enter higher number: '));
// console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);
// looping from lowerNumber to higherNumber
for (var i = 10; i <= 100; i++) {
    var flag = 0;
    // looping through 2 to user input number
    for (var j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}
