"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Progetto = void 0;
const main_1 = require("./main");
class Progetto {
    constructor(id, nome, team, dataInizio, dataFine, task) {
        this.id = id;
        this.nome = nome;
        this.team = team;
        this.dataInizio = dataInizio;
        this.dataFine = dataFine;
        this.task = task;
    }
    static VisualizzaProgettiTeam(teams) {
        main_1.progetti.forEach((progetto) => {
            if (progetto.team == teams) {
                console.table(progetto);
            }
        });
    }
}
exports.Progetto = Progetto;
