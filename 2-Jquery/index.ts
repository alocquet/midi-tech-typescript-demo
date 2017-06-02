/// <reference path="node_modules/@types/jquery/index.d.ts" />
/// <reference path="node_modules/@types/jqueryui/index.d.ts" />

var todos = [
    { id: 1, titre: "Tache 1" },
    { id: 2, titre: "Tache 2", description: "Description de la tache 2" },
    { id: 3, titre: "Tache 3" },
];
console.log(todos.length);
todos.forEach(function (todo) {
    $("#todo tbody").append(`<tr>
        <td> ${todo.titre}</td>
        <td><span class="glyphicon glyphicon-remove" data-id="${todo.id}"></span></td></tr>`);
});



$("#todo tbody td>span").click((item) => {
    $(item.target).closest("tr").toggle("slide");
})