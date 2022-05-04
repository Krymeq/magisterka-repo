import { all } from 'redux-saga/effects';
import { disciplinesSaga } from './disciplines/Sagas';
import { tournamentsSaga } from './tournaments/Sagas';

export function* rootSaga() {
    yield all([
        disciplinesSaga(), 
        tournamentsSaga()
    ])
}