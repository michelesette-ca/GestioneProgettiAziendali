import { Progetto } from "./Progetto";
import { Priorita, Task, Stato } from "./Task";

//#region Aggiungi Prodotto
let progettoUno = new Progetto(0, "Apple", "Mighele Colucci", new Date("2025-01-09"), new Date("2025-01-15"), 1 )
let progettoDue = new Progetto(1, "Samsung", "Davide Sette", new Date("2025-01-14"), new Date("2025-01-15"), 1 )
let progettoTre = new Progetto(0, "Huawei", "Mighele Colucci", new Date("2025-01-13"), new Date("2025-01-15"), 1 )
let progettoQuattro = new Progetto(3, "Nokia", "Davide Sette", new Date("2025-01-11"), new Date("2025-01-15"), 1 )

let progetti: Progetto[] = [
    progettoUno,
    progettoDue,
    progettoTre,
    progettoQuattro
] 

console.table(progetti);

let idsVisti = new Set<number>();
let teamVisti = new Set<string>();

progetti.forEach((progetto) => {
    if (idsVisti.has(progetto.id)) {
        console.log(`ID progetto duplicato trovato: ${progetto.id} - Progetto: ${progetto.nome}`);
    } else {
        idsVisti.add(progetto.id);
    }
});

//visualizza progetti per team
progetti.forEach((progetto) => {
    if (progetto.team == "Mighele Colucci") {
        console.table(progetto); 
    }
})

progetti.splice(3);
console.table(progetti);
//#endregion

//#region Aggiungi Task
let taskUno = new Task(1, "crazione di un nuovo iphone", Stato.InProgress, Priorita.Alta, "Domenigo");
let taskDue = new Task(2, "crazione di un nuovo Samsung", Stato.ToDo, Priorita.Bassa, "Domenigo")
let taskTre = new Task(3, "crazione di un nuovo Huawei", Stato.Done, Priorita.Media, "Domenigo")
let taskQuattro = new Task(4, "crazione di un nuovo Nokia", Stato.InProgress, Priorita.Alta, "Domenigo")

let task: Task[] = [
    taskUno,
    taskDue,
    taskTre,
    taskQuattro
] 
console.table(task)

let idControllati = new Set<number>();
//controllo id task duplicati
task.forEach((task) => {
    if (idControllati.has(task.id)) {
        console.log(`ID task duplicato trovato: ${task.id} - Task: ${task.descrizione}`);
    } else {
        idControllati.add(task.id);
    }
});

//modifica stato task
task.forEach((task) => {
    if (task.id == 1) {
        console.log(`ID task è: ${task.id} e il suo stato è: ${task.stato}`);
        task.stato = Stato.Done
        console.log(`ID task è: ${task.id} e il suo nuovo stato è: ${task.stato}`); 
    }
})

//#endregion