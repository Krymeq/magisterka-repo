import {createReducer, on} from "@ngrx/store";
import {initialState} from "./disciplines.state";
import {disciplinesFetched} from "./disciplines.actions";

export const disciplinesReducer = createReducer(initialState,
  on(disciplinesFetched, (state, {disciplines}) => ({...state, disciplines: disciplines}))
)
