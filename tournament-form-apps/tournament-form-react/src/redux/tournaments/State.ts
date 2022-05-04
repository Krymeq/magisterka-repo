import { Tournament } from "../../domain/Tournament";

export interface TournamentState {
    tournaments: Tournament[];
    selectedTournament?: number; 
}

export const initialState: TournamentState = {
    tournaments: [],
}