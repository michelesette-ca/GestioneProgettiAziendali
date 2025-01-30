import {Task} from "./Task";
import {progetti} from "./main"

export class Progetto {
    constructor(public id: number, public nome: string, public team: string, public dataInizio: Date, public dataFine: Date, public task: Task["id"]) {}

    static VisualizzaProgettiTeam(teams: string){
        progetti.forEach((progetto) => {
            if (progetto.team == teams) {
                console.table(progetto); 
            }
        })
    }
}