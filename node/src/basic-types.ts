// # boolean
var isDone: boolean = false;

// # number
var age: number;
age = 0;

// # string
var forname: string = "toto";

// # array
var strings = ["1", "2"];
var strings = new Array<string>();
var strings: Array<string> = ["1", "2", "3"];

// # énumération 
enum Language { Javascript, Typescript };
var lang = Language.Javascript;
// -> stockage d'un number
console.log(lang);
//  -> accès à la chaîne de caractère associée :
console.log(Language[lang]);

// # any
var something: any;
something = 1;
something = "D'Oh!";
console.log(something.length);

// # Object
var anOnject: Object;
anOnject = "Hey Object!";
// --> Error : console.log(anOnject.length);

// # Void
function test(): void { /*return 1;*/ }
// #type assertion <=> cast
var somethingLength: number = (<string>something).length;
somethingLength= (something as string).length;
