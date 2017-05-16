// Type Compatibility
interface Named {
    name: string;
}
class Person {
    name: string;
}
let p: Named;
// OK, because of structural typing
p = new Person();
let y = { name: "Alice", location: "Seattle" };
p = y;

// Comparing two functions
let xx = (a: number) => 0;
let yy = (b: number, s: string) => 0;
yy = xx; // OK
// xx = yy; // Error

// enums
enum Status { Ready, Waiting };
enum Color { Red, Blue, Green };

let statuss = Status.Ready;
// statuss = Color.Green;  //error because another enum type. Should be ok if statuss has been a number type




// classes  --> only instance members
class Animal0 {
    feet: number;
    constructor(name: string, numFeet: number) { }
}
class Size {
    feet: number;
    constructor(numFeet: number) { }
}
let a: Animal0;
let s: Size;
a = s;  //OK
s = a;  //OK




// Generics
interface Empty<T> {}
let xt: Empty<number>;
let yt: Empty<string>;
xt = yt;  // okay, y matches structure of x

interface NotEmpty<T> {data: T;}
let xr: NotEmpty<number>;
let yr: NotEmpty<string>;
// xr = yr;  // error, x and y are not compatible
