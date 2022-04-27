import { CaseReducer, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { Discipline } from "../../domain/Discipline";
import { disciplinesFetched } from "./Actions";
import { DisciplineState, initialState } from "./State";

const onSetDisciplines: CaseReducer<
    DisciplineState,
    PayloadAction<Discipline[]>>
    = (state, { payload }) => {
        state.disciplines = payload;
    };

export const disciplineReducer = createReducer(initialState, (builder) => {
    builder.addCase(disciplinesFetched, onSetDisciplines);
})