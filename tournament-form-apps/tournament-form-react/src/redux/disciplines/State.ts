import { Discipline } from "../../domain/Discipline";

export interface DisciplineState {
    disciplines: Discipline[];
}

export const initialState: DisciplineState = {
    disciplines: [],
}