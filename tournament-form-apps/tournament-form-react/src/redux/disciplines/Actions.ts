import { createAction } from "@reduxjs/toolkit";
import { Discipline } from "../../domain/Discipline";

export const enum DisciplinesActions {
    FETCH_DISCIPLINES = 'discipline/fetch-disciplines',
    DISCIPLINES_FETCHED = 'discipline/disciplines-fetched'
}

export const fetchDisciplines = createAction<void>(DisciplinesActions.FETCH_DISCIPLINES);
export const disciplinesFetched = createAction<Discipline[]>(DisciplinesActions.DISCIPLINES_FETCHED);