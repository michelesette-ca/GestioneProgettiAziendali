import { task } from "./main"

export enum Stato {
    ToDo = "To Do",
    InProgress = "In Progress",
    Done = "Done"
}

export enum Priorita {
    Bassa = "Bassa",
    Media = "Media",
    Alta = "Alta"
}


export class Task {

    constructor(public id: number, public descrizione: string, public stato: Stato, public priorita: Priorita, public responsabile: string) { }

    static Modificatask() {
        try {
            const idDaModificare = 4;
            let taskDaModificare = task.find(t => t.id === idDaModificare);

            if (!taskDaModificare) {
                throw new Error(`Task con ID ${idDaModificare} non trovato.\n\n`); // Lancia un'eccezione se non esiste
            }

            console.log(`ID task è: ${taskDaModificare.id} e il suo stato è: ${taskDaModificare.stato}`);
            taskDaModificare.stato = Stato.Done;
            console.log(`ID task è: ${taskDaModificare.id} e il suo nuovo stato è: ${taskDaModificare.stato}`);

        } catch (error: any) {
            console.error(error.message); // Mostra l'errore se il task non esiste
        }
    }

    static TaskAltaPriorita() {
        console.log("I task con priorità alta sono: \n");

        task.forEach((task) => {
            if (task.priorita == Priorita.Alta) {
                console.table(task)
            }
        })
    }

}


