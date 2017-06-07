enum State{A_FAIRE, TERMINER}

interface Todo {
    titre:string,
    description?:string,
    etat: State
}

let todos : Todo[] = [
    {titre:"Preparer le midi technique TypeScript", etat:State.TERMINER},
    {titre:"Traiter les demandes PIC", description:"Description de la tache 2", etat:State.TERMINER},
    {titre:"Preparer les vacances", etat:State.TERMINER},    
]

console.log(todos.length);
todos.forEach(todo => {
    const li = document.createElement("li")
    li.innerHTML = `${todo.titre} Status : ${todo.etat === State.TERMINER? 'Realiser':'A faire'}`
    document.querySelector("#todo").appendChild(li);
}  
)
