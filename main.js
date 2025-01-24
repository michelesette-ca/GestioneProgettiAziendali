"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Progetto_1 = require("./Progetto");
const Task_1 = require("./Task");
//#region Aggiungi Progetti
let progettoUno = new Progetto_1.Progetto(0, "Apple", "Mighele Colucci", new Date("2025-01-09"), new Date("2025-01-15"), 1);
let progettoDue = new Progetto_1.Progetto(1, "Samsung", "Davide Sette", new Date("2025-01-14"), new Date("2025-01-15"), 1);
let progettoTre = new Progetto_1.Progetto(0, "Huawei", "Mighele Colucci", new Date("2025-01-13"), new Date("2025-01-15"), 1);
let progettoQuattro = new Progetto_1.Progetto(3, "Nokia", "Davide Sette", new Date("2025-01-11"), new Date("2025-01-15"), 1);
let progetti = [
    progettoUno,
    progettoDue,
    progettoTre,
    progettoQuattro
];
console.table(progetti);
let idsVisti = new Set();
progetti.forEach((progetto) => {
    if (idsVisti.has(progetto.id)) {
        console.log(`ID progetto duplicato trovato: ${progetto.id} - Progetto: ${progetto.nome}`);
    }
    else {
        idsVisti.add(progetto.id);
    }
});
//visualizza progetti per team
progetti.forEach((progetto) => {
    if (progetto.team == "Mighele Colucci") {
        console.table(progetto);
    }
});
//#endregion
// Elimina progetto
progetti.splice(3);
console.table(progetti);
//#region Aggiungi Task
let taskUno = new Task_1.Task(1, "crazione di un nuovo iphone", Task_1.Stato.InProgress, Task_1.Priorita.Alta, "Domenigo");
let taskDue = new Task_1.Task(2, "crazione di un nuovo Samsung", Task_1.Stato.ToDo, Task_1.Priorita.Bassa, "Domenigo");
let taskTre = new Task_1.Task(3, "crazione di un nuovo Huawei", Task_1.Stato.Done, Task_1.Priorita.Media, "Domenigo");
let taskQuattro = new Task_1.Task(4, "crazione di un nuovo Nokia", Task_1.Stato.InProgress, Task_1.Priorita.Alta, "Domenigo");
let task = [
    taskUno,
    taskDue,
    taskTre,
    taskQuattro
];
console.table(task);
let idControllati = new Set();
//controllo id task duplicati
task.forEach((task) => {
    if (idControllati.has(task.id)) {
        console.log(`ID task duplicato trovato: ${task.id} - Task: ${task.descrizione}`);
    }
    else {
        idControllati.add(task.id);
    }
});
//modifica stato task
try {
    const idDaModificare = 5;
    let taskDaModificare = task.find(t => t.id === idDaModificare);
    if (!taskDaModificare) {
        throw new Error(`Task con ID ${idDaModificare} non trovato.`); // Lancia un'eccezione se non esiste
    }
    console.log(`ID task è: ${taskDaModificare.id} e il suo stato è: ${taskDaModificare.stato}`);
    taskDaModificare.stato = Task_1.Stato.Done;
    console.log(`ID task è: ${taskDaModificare.id} e il suo nuovo stato è: ${taskDaModificare.stato}`);
}
catch (error) {
    console.error(error.message); // Mostra l'errore se il task non esiste
}
//#endregion
