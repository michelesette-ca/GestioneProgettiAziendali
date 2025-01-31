import { Task } from "./Task";
import { progetti } from "./main"

export class Progetto {

    public task: Task[]

    constructor(public id: number, public nome: string, public team: string, public dataInizio: Date, public dataFine: Date,) {
        this.task = [];
    }

    AggiungiProgetto(progetto: Progetto) {
        let trovato = progetti.find(p => p.id === progetto.id);
        if (trovato) {
            console.error(`Progetto già trovato con id ${progetto.id}`);
        } else {
            progetti.push(progetto);
            console.log(`Progetto con id ${progetto.id} aggiunto con successo.`);
        }
    }


    static VisualizzaProgettiTeam(teams: string) {
        progetti.forEach((progetto) => {
            if (progetto.team == teams) {
                console.table(progetto);
            }
        })
    }

    AggiungiTaskAlProgetto(task: Task) {
        // Controlla se il task esiste già nel progetto
        let esiste = this.task.some(t => t.id === task.id);
        if (esiste) {
            console.error(`Task con ID ${task.id} già esistente nel progetto ${this.nome}.`);
        } else {
            this.task.push(task);
            console.log(`Task con ID ${task.id} aggiunto al progetto ${this.nome}.`);
        }
    }

}