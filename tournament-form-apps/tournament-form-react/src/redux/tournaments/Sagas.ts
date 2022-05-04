import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { getTournaments } from "../../api/backend";
import { Tournament } from "../../domain/Tournament";
import { FetchTournamentPayload, TournamentActions, tournamentsFetched } from "./Actions";

function* onFetchTournaments(action: PayloadAction<FetchTournamentPayload>) {
    const response: Tournament[] = yield call(getTournaments, action.payload);
    yield put(tournamentsFetched(response));
};


export function* tournamentsSaga() {
    yield takeLatest(TournamentActions.FETCH_TOURNAMENTS, onFetchTournaments)
}