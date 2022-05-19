import { createAction, props } from "@ngrx/store";
import { Tournament } from "../../domain/Tournament";

export const enum TournamentsActions {
  FETCH_TOURNAMENTS = 'tournaments/fetch-tournaments',
  TOURNAMENTS_FETCHED = 'tournaments/tournaments-fetched',
  SELECT_TOURNAMENT = 'tournament/select-tournament',
}

export interface FetchTournamentPayload {
  page?: number,
  disciplineId: number,
}

export const fetchTournaments = createAction(
  TournamentsActions.FETCH_TOURNAMENTS,
  props<{payload: FetchTournamentPayload}>(),
)

export const tournamentsFetched = createAction(
  TournamentsActions.TOURNAMENTS_FETCHED,
  props<{payload: Tournament[]}>(),
)

export const selectTournament = createAction(
  TournamentsActions.SELECT_TOURNAMENT,
  props<{payload?: number}>(),
)