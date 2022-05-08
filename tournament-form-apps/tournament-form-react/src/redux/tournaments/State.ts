import { createSelector } from "@reduxjs/toolkit";
import { Tournament } from "../../domain/Tournament";
import { RootState } from "../store";

export interface TournamentState {
    tournaments: Tournament[];
    selectedTournament?: number; 
}

export const initialState: TournamentState = {
    tournaments: [],
}

export const selectTournamentState = (state: RootState) => state.tournaments;
export const getSelectedTournament = createSelector(selectTournamentState,
    (state: TournamentState) => state.tournaments.find(tournament => tournament.id === state.selectedTournament), 
)