import { createSelector } from "@ngrx/store";
import { Tournament } from "../../domain/Tournament";
import { AppState } from "../reducers";

export interface TournamentState {
  tournaments: Tournament[];
  selectedTournament?: number;
}

export const initialState: TournamentState = {
  tournaments: [],
}

export const selectTournamentState = (state: AppState) => state.tournaments;
export const selectTournaments = createSelector(selectTournamentState, (state) => state.tournaments);
export const getSelectedTournament = createSelector(selectTournamentState, 
  (state) => state.tournaments.find(tournament => tournament.id === state.selectedTournament)
);
