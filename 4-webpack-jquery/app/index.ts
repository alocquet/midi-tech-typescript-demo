import * as $  from "jquery";
import {sayHello} from "./component"
import * as _ from "lodash"
import {RootObject} from "./meteo"

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

 

    function searchWeather(town:string){
     $.ajax({url:`http://www.prevision-meteo.ch/services/json/${town}`})
    .then(data => data as RootObject)
    .then(meteo => {
       $("#ville").text(`${meteo.city_info.name}`)
       $("#prevision").text(meteo.current_condition.date)
       $("#hour").text(meteo.current_condition.hour)
       $("#temperature").text(`${meteo.current_condition.tmp}`)
       $("#humidite").text(`${meteo.current_condition.humidity}`)
       $("#condition").text(`${meteo.current_condition.condition}`)
       $("#prev_en_image").attr("src", meteo.current_condition.icon_big)

    });
    }

    $("#villeSaisie").blur( item => searchWeather($(item.target).val()));
    $(document).ready(()=>searchWeather("lille"))

   