//realisation des imports



//appel de la méthode sayHello

var todos  = [
    {titre:"Preparer le midi technique TypeScript"},
    {titre:"Traiter les demandes PIC", description:"Description de la tache 2"},
    {titre:"Preparer les vacances"},    
]

// parcours de la liste
var ul = $("#content").append($("<ul>"));
$.each(todos, (index, item)=> ul.append(`<li>${item.titre}</li>`))
