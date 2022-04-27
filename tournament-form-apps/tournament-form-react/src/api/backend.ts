import { Discipline } from "../domain/Discipline";
import { Tournament } from "../domain/Tournament";

export const getDisciplines = (): Promise<Discipline[]> =>
    fetch('http://localhost:3456/disciplines')
        .then(res => res.json());

export const getTournaments = (disciplineId: number): Promise<Tournament[]> =>
    fetch(`http://localhost:3456/disciplines/${disciplineId}/tournaments`)
        .then(res => res.json());