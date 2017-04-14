// # var
// # scope
var classicVar = 1;
function scope() {
    if (true) { var classicVar = 2; }
    console.log(classicVar);
}
scope();
console.log(classicVar);

function index() {
    for (var i = 0; i < 10; i++) {
        setTimeout(function () { console.log(i); }, 100 * i);
    }
}
// index();
// --> IIFE
function iife() {
    for (var i = 0; i < 10; i++) {
        // capture the current state of 'i'
        // by invoking a function with its current value
        (function (i) {
            setTimeout(function () { console.log(i); }, 100 * i);
        })(i);
    }
}
// iife();
// # let
let it = "be";
// Block scoping
function scope2() {
    if (true) { let nouveau = "service"; }
    // console.log(nouveau);
}
// Re-declarations and Shadowing
function redeclaration1(x: any) {
    var x;
    var x;
    if (true) { var x; }
}
let x = 10;
// error : let x = 20;
function redeclaration2(x: any) {
    // error: let x = 100;
}
function shadow1(x: any) {
    if (true) { let x = 100; console.log(x); }
    console.log(x);
}
shadow1(10);

// # Block-scoped variable capturing
function varCapturing() {
    for (let i = 0; i < 10; i++) {
        setTimeout(function () { console.log(i); }, 100 * i);
    }
}
// varCapturing();




// # const
const defaultDog = { id: 1, name: 'Caniche' };
// error: defaultDog = { id: 2, name:'BullDog' };
defaultDog.id = 3;
defaultDog.name = 'Saint-bernard';

// # Destructuring
let arr = ['arg1', 'arg2'];
let [arg1, arg2] = arr;
console.log(arg1, arg2);

// # Spread
let arr1 = [1, 2];
let arr2 = [3, 4];
console.log([0, ...arr1, ...arr2, 5]);