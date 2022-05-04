import { Discipline } from "../domain/Discipline";
import { Tournament } from "../domain/Tournament";
import { FetchTournamentPayload } from "../redux/tournaments/Actions";

export const getDisciplines = (): Promise<Discipline[]> =>
    fetch('http://localhost:3456/disciplines')
        .then(res => res.json());

export const getTournaments = ({disciplineId, page = 1}: FetchTournamentPayload): Promise<Tournament[]> =>
    fetch(`http://localhost:3456/disciplines/${disciplineId}/tournaments?page=${page}`)
        .then(res => res.json()).then(res => res.tournaments);