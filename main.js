"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Progetto_1 = require("./Progetto");
const Task_1 = require("./Task");
//#region Aggiungi Prodotto
let progettoUno = new Progetto_1.Progetto(0, "Apple", "Mighele Colucci", new Date("2025-01-09"), new Date("2025-01-15"), 1);
let progettoDue = new Progetto_1.Progetto(1, "Samsung", "Mighele Colucci", new Date("2025-01-14"), new Date("2025-01-15"), 1);
let progettoTre = new Progetto_1.Progetto(0, "Huawei", "Mighele Colucci", new Date("2025-01-13"), new Date("2025-01-15"), 1);
let progettoQuattro = new Progetto_1.Progetto(3, "Nokia", "Mighele Colucci", new Date("2025-01-11"), new Date("2025-01-15"), 1);
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
        console.log(`ID duplicato trovato: ${progetto.id} - Progetto: ${progetto.nome}`);
    }
    else {
        idsVisti.add(progetto.id);
    }
});
progetti.splice(3);
console.table(progetti);
//#endregion
//#region Aggiungi Task
let taskUno = new Task_1.Task(1, "crazione di un nuovo iphone", Task_1.Stato.InProgress, Task_1.Priorita.Alta, "Domenigo");
let taskDue = new Task_1.Task(2, "crazione di un nuovo Samsung", Task_1.Stato.ToDo, Task_1.Priorita.Bassa, "Domenigo");
let taskTre = new Task_1.Task(1, "crazione di un nuovo Huawei", Task_1.Stato.Done, Task_1.Priorita.Media, "Domenigo");
let taskQuattro = new Task_1.Task(3, "crazione di un nuovo Nokia", Task_1.Stato.InProgress, Task_1.Priorita.Alta, "Domenigo");
let task = [
    taskUno,
    taskDue,
    taskTre,
    taskQuattro
];
console.table(task);
//#endregion
