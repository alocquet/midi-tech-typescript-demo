interface MessageProvider {
    message: string;
}

class Americaine implements MessageProvider {
    /*private*/ message: string;
    constructor(message: string) {
        this.message = message;
    }
    /*protected*/ citer() {
        return this.message;
    }
}

let citation = new Americaine("Il est déjà neuf heures ?");
// public by default
citation.citer();
citation.message;
// --> exemples private / protected

// accesseur
class MessageSecurise implements MessageProvider {
    private _message: string;
    get message(): string {
        return this._message;
    }
    static DEFAULT = '%*#';
}
// # static
MessageSecurise.DEFAULT;

// # abstract
abstract class Service {
    abstract doExecute(): void;
    execute(): void {
        /* DO Something generic */
        this.doExecute();
        /* DO Something generic */
    }
}
class CrudService extends Service {
    doExecute(): void {
        /* DO CRUD Operations */
    }
}

// # Constructors
class Dog {
    constructor(public name: string) { }
}
new Dog('Dingo').name;

// utiliser une classe comme une instance
class Point {
    constructor(public x: number, public y: number) { }
    toString() { return this.x + "," + this.y; }
}
let newPoint = new Point(1, 2);
console.log(newPoint.toString());
let point: Point = { x: 1, y: 2 };
console.log(point.toString());
