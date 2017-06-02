
interface Todo {
    titre:string,
    description?:string,
    etat?: string
}

let todos : Todo[] = [
    {titre:"Tache 1"},
    {titre:"Tache 2", description:"Description de la tache 2"},
    {titre:"Tache 3"},    
]

console.log(todos.length);
todos.forEach(todo => {
    const div = document.createElement("div")
    div.textContent = todo.titre
    document.querySelector("#todo").appendChild(div);
}  
)
