import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { disciplineReducer } from "./disciplines/Reducer";
import { rootSaga } from "./rootSaga";
import { tournamentReducer } from "./tournaments/Reducer";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        disciplines: disciplineReducer,
        tournaments: tournamentReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;