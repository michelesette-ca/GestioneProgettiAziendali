"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.task = exports.progetti = void 0;
const Progetto_1 = require("./Progetto");
const Task_1 = require("./Task");
//#region Aggiungi Progetti
let progettoUno = new Progetto_1.Progetto(0, "Apple", "Mighele Colucci", new Date("2025-01-09"), new Date("2025-01-15"), 1);
let progettoDue = new Progetto_1.Progetto(1, "Samsung", "Davide Sette", new Date("2025-01-14"), new Date("2025-01-15"), 1);
let progettoTre = new Progetto_1.Progetto(0, "Huawei", "Mighele Colucci", new Date("2025-01-13"), new Date("2025-01-15"), 1);
let progettoQuattro = new Progetto_1.Progetto(3, "Nokia", "Davide Sette", new Date("2025-01-11"), new Date("2025-01-15"), 1);
exports.progetti = [
    progettoUno,
    progettoDue,
    progettoTre,
    progettoQuattro
];
console.table(exports.progetti);
console.log("Progetti duplicati: \n\n");
TrovaDuplicati(exports.progetti);
//visualizza progetti per team
Progetto_1.Progetto.VisualizzaProgettiTeam(progettoUno.team);
//#endregion
// Elimina progetto
exports.progetti.splice(2, 1);
console.table(exports.progetti);
//#region Aggiungi Task
let taskUno = new Task_1.Task(1, "crazione di un nuovo iphone", Task_1.Stato.InProgress, Task_1.Priorita.Alta, "Domenigo");
let taskDue = new Task_1.Task(2, "crazione di un nuovo Samsung", Task_1.Stato.ToDo, Task_1.Priorita.Bassa, "Domenigo");
let taskTre = new Task_1.Task(1, "crazione di un nuovo Huawei", Task_1.Stato.Done, Task_1.Priorita.Media, "Domenigo");
let taskQuattro = new Task_1.Task(4, "crazione di un nuovo Nokia", Task_1.Stato.InProgress, Task_1.Priorita.Alta, "Domenigo");
exports.task = [
    taskUno,
    taskDue,
    taskTre,
    taskQuattro
];
console.table(exports.task);
console.log("Task duplicato:");
//controllo id task duplicati
TrovaDuplicati(exports.task);
//modifica stato task
Task_1.Task.Modificatask();
//Task ad alta priorità
Task_1.Task.TaskAltaPriorita();
//#endregion
//Funzioni(?)
function TrovaDuplicati(lista) {
    let idControllati = new Set();
    let trovatoDuplicato = false;
    lista.forEach((elemento) => {
        if (idControllati.has(elemento.id)) {
            console.error(`ID duplicato trovato: ${elemento.id} \n\n`);
            trovatoDuplicato = true;
        }
        else {
            idControllati.add(elemento.id);
        }
    });
    if (!trovatoDuplicato) {
        console.error("Nessun id duplicato trovato \n\n");
    }
}
