import {createAction, props} from "@ngrx/store";
import {Discipline} from "../../domain/Discipline";

export const enum DisciplinesActions {
  FETCH_DISCIPLINES = 'discipline/fetch-disciplines',
  DISCIPLINES_FETCHED = 'discipline/disciplines-fetched'
}

export const fetchDisciplines = createAction(DisciplinesActions.FETCH_DISCIPLINES)
export const disciplinesFetched = createAction(
  DisciplinesActions.DISCIPLINES_FETCHED,
  props<{disciplines: Discipline[]}>()
);
