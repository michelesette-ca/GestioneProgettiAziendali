"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Progetto = void 0;
const main_1 = require("./main");
class Progetto {
    constructor(id, nome, team, dataInizio, dataFine) {
        this.id = id;
        this.nome = nome;
        this.team = team;
        this.dataInizio = dataInizio;
        this.dataFine = dataFine;
        this.task = [];
    }
    // Metodo per aggiungere un progetto
    static AggiungiProgetto(progetto) {
        let trovato = main_1.progetti.find(p => p.id === progetto.id);
        if (trovato) {
            console.error(`Progetto già trovato con id ${progetto.id}`);
        }
        else {
            main_1.progetti.push(progetto);
            console.log(`Progetto con id ${progetto.id} aggiunto con successo.`);
        }
    }
    // Metodo per visualizzare i progetti per team
    static VisualizzaProgettiTeam(teams) {
        main_1.progetti.forEach((progetto) => {
            if (progetto.team === teams) {
                console.table(progetto);
            }
        });
    }
    static rimuoviProgetto(id) {
        let progettoDaTrovare = main_1.progetti.find(p => p.id === id);
        if (progettoDaTrovare) {
            let indice = main_1.progetti.indexOf(progettoDaTrovare);
            main_1.progetti.splice(indice, 1);
            console.log(`Progetto con ID ${id} rimosso con successo.`);
        }
        else {
            console.error(`Progetto con ID ${id} non trovato.`);
        }
    }
    // Metodo per aggiungere un task al progetto
    AggiungiTaskAlProgetto(taskid) {
        // Controlla se il task esiste già nel progetto
        if (this.task.includes(taskid)) {
            console.error(`Task con ID ${taskid} già esistente nel progetto ${this.nome}.`);
        }
        else {
            this.task.push(taskid);
            console.log(`Task con ID ${taskid} aggiunto al progetto ${this.nome}.`);
        }
    }
}
exports.Progetto = Progetto;
