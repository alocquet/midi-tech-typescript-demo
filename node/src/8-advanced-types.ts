// Intersection Types
// combine plusieurs types en 1 seul
interface Serializable { }
interface Comparable { }
let compare: <T extends Serializable & Comparable>(param: T) => number;

// Union Types
// soit type A, soit type B
let compare2: <T extends Serializable | Comparable>(param: T) => number;

interface Bird {
    fly(): void;
    layEggs(): void;
}
interface Fish {
    swim(): void;
    layEggs(): void;
}
function getSmallPet(): Fish | Bird {
    return <Fish>{};
}

let pet = getSmallPet();
// pet.layEggs(); // okay
// pet.swim();    // errors



// Type Guards and Differentiating Types
function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined;
}
if (isFish(pet)) {
    pet.swim();
}
// typeof est reconnu par typscript comme un typeguard -> types js
let xyz: any = 1;
if (typeof xyz === "number") {
    xyz.toExponential();
}
// instanceof est reconnu par typescript comme un typeguard -> constructeur





// Nullable types
// --strictNullChecks permet d'interdire d'assigner null à une variable qui n'est pas de type null
(() => {
    let str = "foo";
    str = null; // ko
})();
(() => {
    let str: string | null = "foo";
    str = null; // ok
})();
// parameters optionnels : | undefined est ajouté automatiquement
function f(x: number, y?: number) {
    return x + (y || 0);
}
f(1, 2);
f(1);
f(1, undefined);
f(1, null); // error, 'null' is not assignable to 'number | undefined'



// Type Aliases
**TODO**