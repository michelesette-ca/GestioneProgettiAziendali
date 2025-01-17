"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = exports.Priorita = exports.Stato = void 0;
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
    AggiungiTask() {
        console.log("aggiungi");
    }
}
exports.Task = Task;
