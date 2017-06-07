import * as $  from "jquery";
import {sayHello} from "./component"

$("#content").append(sayHello("Nicolas"));

$("#content").append("Un test avec jQuery");

var todos  = [
    {titre:"Preparer le midi technique TypeScript"},
    {titre:"Traiter les demandes PIC", description:"Description de la tache 2"},
    {titre:"Preparer les vacances"},    
]

var ul = $("#content").append($("<ul>"));
$.each(todos, (index, item)=> ul.append(`<li>${item.titre}</li>`))
