import { createAction } from "@reduxjs/toolkit";
import { Tournament } from "../../domain/Tournament";

export const enum TournamentActions {
    FETCH_TOURNAMENTS = 'tournament/fetch-tournaments',
    TOURNAMENTS_FETCHED = 'tournament/tournaments-fetched',
    SELECT_TOURNAMENT = 'tournament/select-tournament',
    CLEAR_SELECTION = 'tournament/clear-selection',
}

export interface FetchTournamentPayload {
    page?: number,
    disciplineId: number,
}

export const fetchTournaments = createAction<FetchTournamentPayload>(TournamentActions.FETCH_TOURNAMENTS);
export const tournamentsFetched = createAction<Tournament[]>(TournamentActions.TOURNAMENTS_FETCHED);
export const selectTournament = createAction<number>(TournamentActions.SELECT_TOURNAMENT);
export const clearSelection = createAction<void>(TournamentActions.CLEAR_SELECTION);