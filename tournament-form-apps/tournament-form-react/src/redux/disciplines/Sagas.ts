import { call, put, takeLatest } from "redux-saga/effects";
import { getDisciplines } from "../../api/backend";
import { Discipline } from "../../domain/Discipline";
import { disciplinesFetched, fetchDisciplines } from "./Actions";

function* onFetchDisciplines() {
    const response: Discipline[] = yield call(getDisciplines);
    yield put(disciplinesFetched(response));
};


export function* disciplinesSaga() {
    yield takeLatest(fetchDisciplines().type, onFetchDisciplines)
}