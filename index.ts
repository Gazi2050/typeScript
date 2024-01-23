let user = 'jack';
let age = 20;
console.log(age);
console.log(user);

function addNumbers(num1: number, num2: number) {
    console.log(num1 + num2);
}
addNumbers(20, 30);

//built-in type : number,string,boolean,void,undefined,null
let num: number;
num = 56;
console.log(num);
let Name: string;
Name = 'araf';
console.log(Name);
let bul: boolean;
bul = true;
console.log(bul);
let first = 'black '
let last = 'hole'
let full = first.concat(last);
console.log(full);
//void
function display(): void {
    console.log('infinity void');
}
display();