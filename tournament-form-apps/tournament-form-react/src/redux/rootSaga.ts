import { all } from 'redux-saga/effects';
import { disciplinesSaga } from './disciplines/Sagas';

export function* rootSaga() {
    yield all([disciplinesSaga()])
}