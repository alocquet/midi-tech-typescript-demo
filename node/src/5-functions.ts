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

// optional & default parameters
function optionals(a: string, b?: string, c = 'ok') {
    console.log(a, b, c);
}
optionals('a');

// Utilisation de this

// 1. Function CLASSIQUE
/* let cinema = {
    seances: [
        {film:"Zoolander", places : 150},
        {film:"Wayne's World", places : 100},
        {film:"Kung fury", places : 10}],
    moduleDeReservation: function() {
        return function(seance: number) {
            if(this.seances[seance] && this.seances[seance].places > 0) {
                this.seances[seance].places --;
                return true;
            }
            return false;
        }
    }
}

let moduleDeReservation = cinema.moduleDeReservation();
console.log(moduleDeReservation(1));*/

// DANS CE CAS : this = window
// correction : utiliser arrow

/*
let cinema = {
    seances: [
        {film:"Zoolander", places : 150},
        {film:"Wayne's World", places : 100},
        {film:"Kung fury", places : 10}],
    moduleDeReservation: function() {
        return (seance: number) => {
            if(this.seances[seance] && this.seances[seance].places > 0) {
                this.seances[seance].places --;
                return this.seances[seance];
            }
            return undefined;
        }
    }
}

let moduleDeReservation = cinema.moduleDeReservation();
console.log(moduleDeReservation(1));
*/
// autre possibilité : passer this en paramètre
interface Seance {
    film: string;
    places: number;
}
interface Cinema {
    seances: Seance[];
    moduleDeReservation(this: Cinema): (seance: number) => Seance;
}

let cinema: Cinema = {
    seances: [
        {film:"Zoolander", places : 150},
        {film:"Wayne's World", places : 100},
        {film:"Kung fury", places : 10}],
    moduleDeReservation: function(this: Cinema) {
        return (seance: number) => {
            if(this.seances[seance] && this.seances[seance].places > 0) {
                this.seances[seance].places --;
                return this.seances[seance];
            }
            return undefined;
        }
    }
}

let moduleDeReservation = cinema.moduleDeReservation();
console.log(moduleDeReservation(1));

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
