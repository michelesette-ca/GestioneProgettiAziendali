"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = exports.Priorita = exports.Stato = void 0;
const main_1 = require("./main");
var Stato;
(function (Stato) {
    Stato["ToDo"] = "To Do";
    Stato["InProgress"] = "In Progress";
    Stato["Done"] = "Done";
})(Stato || (exports.Stato = Stato = {}));
var Priorita;
(function (Priorita) {
    Priorita["Bassa"] = "Bassa";
    Priorita["Media"] = "Media";
    Priorita["Alta"] = "Alta";
})(Priorita || (exports.Priorita = Priorita = {}));
class Task {
    constructor(id, descrizione, stato, priorita, responsabile) {
        this.id = id;
        this.descrizione = descrizione;
        this.stato = stato;
        this.priorita = priorita;
        this.responsabile = responsabile;
    }
    static Modificatask() {
        try {
            const idDaModificare = 4;
            let taskDaModificare = main_1.task.find(t => t.id === idDaModificare);
            if (!taskDaModificare) {
                throw new Error(`Task con ID ${idDaModificare} non trovato.\n\n`); // Lancia un'eccezione se non esiste
            }
            console.log(`ID task è: ${taskDaModificare.id} e il suo stato è: ${taskDaModificare.stato}`);
            taskDaModificare.stato = Stato.Done;
            console.log(`ID task è: ${taskDaModificare.id} e il suo nuovo stato è: ${taskDaModificare.stato}`);
        }
        catch (error) {
            console.error(error.message); // Mostra l'errore se il task non esiste
        }
    }
    static TaskAltaPriorita() {
        console.log("I task con priorità alta sono: \n");
        main_1.task.forEach((task) => {
            if (task.priorita == Priorita.Alta) {
                console.table(task);
            }
        });
    }
}
exports.Task = Task;
