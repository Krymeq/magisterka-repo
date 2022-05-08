import { Action, CaseReducer, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { Tournament } from "../../domain/Tournament";
import { clearSelection, selectTournament, tournamentsFetched } from "./Actions";
import { initialState, TournamentState } from "./State";

const onSetTournaments: CaseReducer<
    TournamentState,
    PayloadAction<Tournament[]>>
    = (state, { payload }) => {
        state.tournaments = payload;
    };

const onSelectTournament: CaseReducer<TournamentState, PayloadAction<number | undefined>> = (state, {payload}) => {
    state.selectedTournament = payload;
}

const onClearSelection: CaseReducer<TournamentState, Action> = (state) => {
    state.selectedTournament = undefined;
}

export const tournamentReducer = createReducer(initialState, (builder) => {
    builder.addCase(tournamentsFetched, onSetTournaments);
    builder.addCase(selectTournament, onSelectTournament);
    builder.addCase(clearSelection, onClearSelection)
})