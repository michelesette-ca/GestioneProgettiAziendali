import { Task } from "./Task";
import { progetti } from "./main";

export class Progetto {

    public task: number[];

    constructor(public id: number, public nome: string, public team: string, public dataInizio: Date, public dataFine: Date) {

        this.task = [];
    }

    // Metodo per aggiungere un progetto
    static AggiungiProgetto(progetto: Progetto) {
        let trovato = progetti.find(p => p.id === progetto.id);
        if (trovato) {
            console.error(`Progetto già trovato con id ${progetto.id}`);
        } else {
            progetti.push(progetto);
            console.log(`Progetto con id ${progetto.id} aggiunto con successo.`);
        }
    }

    // Metodo per visualizzare i progetti per team
    static VisualizzaProgettiTeam(teams: string) {
        progetti.forEach((progetto) => {
            if (progetto.team === teams) {
                console.table(progetto);
            }
        });
    }

    static rimuoviProgetto(id: number) {
        let progettoDaTrovare = progetti.find(p => p.id === id);
        if (progettoDaTrovare) {
            let indice = progetti.indexOf(progettoDaTrovare);
            progetti.splice(indice, 1);
            console.log(`Progetto con ID ${id} rimosso con successo.`);
        } else {
            console.error(`Progetto con ID ${id} non trovato.`);
        }
    }

    // Metodo per aggiungere un task al progetto
    AggiungiTaskAlProgetto(taskid: number) {
        // Controlla se il task esiste già nel progetto
        if (this.task.includes(taskid)) {
            console.error(`Task con ID ${taskid} già esistente nel progetto ${this.nome}.`);
        } else {
            this.task.push(taskid);
            console.log(`Task con ID ${taskid} aggiunto al progetto ${this.nome}.`);
        }
    }
}
