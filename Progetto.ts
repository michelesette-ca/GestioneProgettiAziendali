import {Task} from "./Task";

export class Progetto {
    constructor(public id: number, public nome: string, public team: string, public dataInizio: Date, public dataFine: Date, public task: Task["id"]) { }
}