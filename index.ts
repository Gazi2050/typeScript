let user = 'jack';
let age = 20;
//console.log(age);
//console.log(user);

function addNumbers(num1: number, num2: number) {
    //console.log(num1 + num2);
}
addNumbers(20, 30);

//built-in type : number,string,boolean,void
let num: number;
num = 56;
//console.log(num);
let Name: string;
Name = 'araf';
//console.log(Name);
let bul: boolean;
bul = true;
//console.log(bul);
let first = 'black '
let last = 'hole'
let full = first.concat(last);
//console.log(full);
//void
function display(): void {
    //console.log('infinity void');
}
display();
//any type
let v: any = 1;
v = "v";
//console.log(v);
//unknown type
let w: unknown = 1;
w = "w";
//console.log(w);
//union type
let a: string | number;
a = 1;
a = 'a';
//console.log(a);
function Display(b: string | number | boolean) {
    //console.log(b);
}
Display('infinity string');
Display(9);
Display(true);

/***********************array******************************/

let A: string[];
A = ['a', 'b', 'c', 'd']
//console.log(A);
//console.log(A[3]);

let B: Array<Number>;
B = [7, 6, 4, 3]
//console.log(B);
//console.log(B[2]);

let C: (string | number | boolean)[];
C = ['C', 'b', 'c', true, 'd', 8, 9, false, 65]
C.sort()
//console.log(C);
//console.log(C[5]);

//tuple type
let ab: [number, string]
ab = [77, 'ab']
// console.log(ab);

//enum type
/*enum type: 1)numeric
             2)string
             3)heterogenous
*/
// 1) numeric enum
enum requestType {
    data,
    number,
    post,
    delete
}
// console.log(requestType);

// 2) string
enum requestType2 {
    data = 'q',
    number = 'o',
    post = 'l',
    delete = 'j'
}
// console.log(requestType2);
// console.log(requestType2.data);
// console.log(requestType2['data']);

// 3) heterogenous
enum requestType3 {
    data = 'q',
    number = 'o',
    post = 'l',
    delete = 'j',
    id = 898,
    userId = 876
}
console.log(requestType3);