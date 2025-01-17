export enum Stato 
{
    ToDo = "To Do",
    InProgress = "In Progress",
    Done = "Done"
}

export enum Priorita 
{
    Bassa = "Bassa",
    Media = "Media",
    Alta = "Alta"
}


export class Task 
{
    constructor (public id : number, public descrizione : string, public stato : Stato, public priorita : Priorita, public responsabile : string) {}

    AggiungiTask()
    {
        console.log("aggiungi");        
    }
}