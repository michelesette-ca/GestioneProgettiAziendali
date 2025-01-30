import { Progetto } from "./Progetto";
import { Priorita, Task, Stato } from "./Task";

//#region Aggiungi Progetti
let progettoUno = new Progetto(0, "Apple", "Mighele Colucci", new Date("2025-01-09"), new Date("2025-01-15"), 1 )
let progettoDue = new Progetto(1, "Samsung", "Davide Sette", new Date("2025-01-14"), new Date("2025-01-15"), 1 )
let progettoTre = new Progetto(0, "Huawei", "Mighele Colucci", new Date("2025-01-13"), new Date("2025-01-15"), 1 )
let progettoQuattro = new Progetto(3, "Nokia", "Davide Sette", new Date("2025-01-11"), new Date("2025-01-15"), 1 )

export let progetti: Progetto[] = [
    progettoUno,
    progettoDue,
    progettoTre,
    progettoQuattro
] 
console.table(progetti);

console.log("Progetti duplicati: ");

TrovaDuplicati(progetti)
console.log("");
console.log("");
//visualizza progetti per team
Progetto.VisualizzaProgettiTeam(progettoUno.team);
//#endregion

console.log("");
console.log("");
console.log("");

// Elimina progetto
progetti.splice(2, 1); 
console.table(progetti);

console.log("");
console.log("");
console.log("");

//#region Aggiungi Task
let taskUno = new Task(1, "crazione di un nuovo iphone", Stato.InProgress, Priorita.Alta, "Domenigo");
let taskDue = new Task(2, "crazione di un nuovo Samsung", Stato.ToDo, Priorita.Bassa, "Domenigo")
let taskTre = new Task(1, "crazione di un nuovo Huawei", Stato.Done, Priorita.Media, "Domenigo")
let taskQuattro = new Task(4, "crazione di un nuovo Nokia", Stato.InProgress, Priorita.Alta, "Domenigo")

export let task: Task[] = [
    taskUno,
    taskDue,
    taskTre,
    taskQuattro
] 
console.table(task)

console.log("");
console.log("");
console.log("Task duplicato:");

//controllo id task duplicati
TrovaDuplicati(task);

console.log("");
console.log("");
console.log("");

//modifica stato task
Task.Modificatask();


console.log("");
console.log("");
console.log("");


//Task ad alta priorità
Task.TaskAltaPriorita()
//#endregion


//Funzioni(?)
function TrovaDuplicati(lista: (Progetto | Task)[]) {
    let idControllati = new Set<number>();
    let trovatoDuplicato = false;

    lista.forEach((elemento) => {
        if (idControllati.has(elemento.id)) {
            console.error(`ID duplicato trovato: ${elemento.id}`);
            trovatoDuplicato = true;
        } else {
            idControllati.add(elemento.id);
        }
    });

    if (!trovatoDuplicato) {
        console.error("Nessun id duplicato trovato");
    }
}

