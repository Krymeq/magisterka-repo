import {Discipline} from "../../domain/Discipline";
import {AppState} from "../reducers";
import {createSelector} from "@ngrx/store";

export interface DisciplineState {
  disciplines: Discipline[];
}

export const initialState: DisciplineState = {
  disciplines: [],
}

export const selectDisciplineState = (state: AppState) => state.disciplines;
export const selectDisciplines = createSelector(selectDisciplineState, (state) => state.disciplines);
