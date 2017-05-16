// generics
function identity<T>(arg: T): T {
    return arg;
}
console.log(identity('1'));
class Wrapper<T> {
    inner: T;
}

// contraintes
interface Lengthwise {
    length: number;
}
function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length); 
    return arg;
}

// Type Parameters in Generic Constraints
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}
let x1 = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x1, "a"); // okay
// getProperty(x1, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
