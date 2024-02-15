var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var user = 'jack';
var age = 20;
//console.log(age);
//console.log(user);
function addNumbers(num1, num2) {
    //console.log(num1 + num2);
}
addNumbers(20, 30);
/************
 * built-in type :
 * number,
 * string,
 * boolean,
 * void
 *************/
var num;
num = 56;
//console.log(num);
var Name;
Name = 'araf';
//console.log(Name);
var bul;
bul = true;
//console.log(bul);
var first = 'black ';
var last = 'hole';
var full = first.concat(last);
//console.log(full);
//void
function display() {
    //console.log('infinity void');
}
display();
/************any type************/
var v = 1;
v = "v";
//console.log(v);
/************unknown type************/
var w = 1;
w = "w";
//console.log(w);
/************ undefined & null type************/
var value = null;
value = 'hello';
value = null;
value = undefined;
// console.log(value);
/************union type************/
var a;
a = 1;
a = 'a';
//console.log(a);
function Display(b) {
    //console.log(b);
}
Display('infinity string');
Display(9);
Display(true);
function printStatusCode(code) {
    // console.log(`My status code is ${code}.`)
}
printStatusCode(404);
printStatusCode('404');
/************array************/
var A;
A = ['a', 'b', 'c', 'd'];
//console.log(A);
//console.log(A[3]);
var B;
B = [7, 6, 4, 3];
//console.log(B);
//console.log(B[2]);
var C;
C = ['C', 'b', 'c', true, 'd', 8, 9, false, 65];
C.sort();
//console.log(C);
//console.log(C[5]);
var D;
D = [75, 64, 64, 73, 42, 644, 745, 8];
// console.log(D);
/************tuple type************/
var ab;
ab = [77, 'ab'];
// console.log(ab);
/************enum type************/
/*enum type: 1)numeric
             2)string
             3)heterogenous
*/
// 1) numeric enum
var requestType;
(function (requestType) {
    requestType[requestType["data"] = 0] = "data";
    requestType[requestType["number"] = 1] = "number";
    requestType[requestType["post"] = 2] = "post";
    requestType[requestType["delete"] = 3] = "delete";
})(requestType || (requestType = {}));
// console.log(requestType);
// 2) string
var requestType2;
(function (requestType2) {
    requestType2["data"] = "q";
    requestType2["number"] = "o";
    requestType2["post"] = "l";
    requestType2["delete"] = "j";
})(requestType2 || (requestType2 = {}));
// console.log(requestType2);
// console.log(requestType2.data);
// console.log(requestType2['data']);
// 3) heterogenous
var requestType3;
(function (requestType3) {
    requestType3["data"] = "q";
    requestType3["number"] = "o";
    requestType3["post"] = "l";
    requestType3["delete"] = "j";
    requestType3[requestType3["id"] = 898] = "id";
    requestType3[requestType3["userId"] = 876] = "userId";
})(requestType3 || (requestType3 = {}));
// console.log(requestType3);
/************any type************/
var userName;
userName = 'ab';
userName = 97;
userName = true;
userName = [766, 'user'];
userName = { user: 0, name: 'ab' };
// console.log(userName);
/************object type*********/
var user1;
user1 = { userName: 'jack', usrId: 432 };
var user01;
user01 = { userName: 'jack' };
// console.log(user1);
// console.log(user01);
var user2;
user2 = { name: 'jack' };
// console.
var user3;
user3 = [{ name: 'jack', id: 1 }, { name: 'rock', id: 2 }, { name: 'jon', id: 3 },];
var user10;
var user20;
var user30;
user10 = { name: 'a', id: 1 };
user20 = { name: 'b', id: 2 };
user30 = { name: 'c', id: 3 };
// console.log([user10, user20, user30]);
/************class************/
var User = /** @class */ (function () {
    //constructor
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    // Method
    User.prototype.display = function () {
        // console.log(`username: ${this.userName}, age: ${this.age}`);
    };
    return User;
}());
var user101 = new User('gazi', 23);
user101.display();
/************Inheritance************/
var User1 = /** @class */ (function () {
    function User1(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User1.prototype.display = function () {
        console.log("username: ".concat(this.userName, ", age: ").concat(this.age));
    };
    return User1;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(userName, age, studentId) {
        var _this = _super.call(this, userName, age) || this;
        _this.studentId = studentId;
        return _this;
    }
    Student.prototype.display = function () {
        console.log("username: ".concat(this.userName, ", age: ").concat(this.age, ", id: ").concat(this.studentId));
    };
    return Student;
}(User));
var student1 = new Student('keya', 31, 1302020015);
student1.display();
var user105 = new User('Anisul Islam', 25);
user105.display();
