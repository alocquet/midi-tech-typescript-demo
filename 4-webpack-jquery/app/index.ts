import * as $  from "jquery";
import {sayHello} from "./component"

document.body.appendChild(sayHello("Nicolas"));

$("body").append("Un test avec jQuery");

interface ToDo {
    label:string;
}

var todos:Array<ToDo>= [
    {label:"Task 1"},
    {label:"Task 2"},
    {label:"Task 3"},
    {label:"Task 4"},
]

$("body").append($("<ul>"));
$.each(todos, (index, item:ToDo)=> $("ul").append(`<li>${item.label}</li>`))
