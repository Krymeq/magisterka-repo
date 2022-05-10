import { createReducer, on } from "@ngrx/store";
import { selectTournament, tournamentsFetched } from "./tournaments.actions";
import { initialState } from "./tournaments.state";

export const tournamentsReducer = createReducer(
  initialState,
  on(tournamentsFetched, (state, {payload}) => ({...state, tournaments: payload})),
  on(selectTournament, (state, {payload}) => ({...state, selectedTournament: payload})),
)