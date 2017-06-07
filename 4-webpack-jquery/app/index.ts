import * as $  from "jquery";
import {sayHello} from "./component"
import * as _ from "lodash"

$("#content").append(sayHello("Nicolas"));

$("#content").append("Un test avec jQuery");

enum State{A_FAIRE, TERMINER}

interface Todo {
    titre:string,
    description?:string,
    etat: State
}

var todos : Todo[] = [
    {titre:"Preparer le midi technique TypeScript", etat:State.TERMINER},
    {titre:"Traiter les demandes PIC", description:"Description de la tache 2", etat:State.A_FAIRE},
    {titre:"Preparer les vacances", etat:State.A_FAIRE},    
]

var ul = $("#content").append($("<ul>"));
$.each(todos, (index, item)=> ul.append(`<li>${item.titre}</li>`))


_.each(todos)
    .filter(todo=> {console.log(todo.etat);return todo.etat === State.A_FAIRE})
    .map(todo => {console.log(todo.titre); return _.toUpper(todo.titre);})
    .forEach(titre => console.log(titre));

