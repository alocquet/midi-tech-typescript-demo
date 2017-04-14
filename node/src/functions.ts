// Fonction classiques
let log = 'test';
let logTestFunction = function () {
    console.log(log);
}
logTestFunction(); // ok
let logTestArrow = () => console.log(log);
logTestArrow(); // ok

// signature de fonction comme type
let add: (a: number, b: number) => number;
// error : add(1, 2);
// peut être défini comme interface
interface Operator { (a: number, b: number): number; }
let applyOperator = (a: number, b: number, op: Operator) => op(a, b);
console.log(applyOperator(1, 2, (a, b) => a + b));
// optional & default parameters
function optionals(a: string, b?: string, c = 'ok') {
    console.log(a, b, c);
}
optionals('a');


// THIS
// 1. ARROW
/*let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        return function() {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            
            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);*/
// this = window
// correction : utiliser arrow

// autre possibilité : passer this en paramètre
interface Card {
    suit: string;
    card: number;
}
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}
let deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function (this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);

// overload
class Operators {
    plus(a: string, b: string): string;
    plus(a: number, b: number): number;
    plus(a: any, b: any): any {
        if (typeof a == "string") {
            return a + '-' + b;
        } else {
            return a + b;
        }
    }
    /*plus(a: string, b: string):number {
        return a + b;
    }*/
}
console.log(new Operators().plus(1, 2));
console.log(new Operators().plus('1', '2'));
