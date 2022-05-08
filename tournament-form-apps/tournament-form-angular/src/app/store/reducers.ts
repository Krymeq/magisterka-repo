import {disciplinesReducer} from "./disciplines/disciplines.reducer";
import {DisciplineState} from "./disciplines/disciplines.state";

export const reducers = {
  disciplines: disciplinesReducer
}

export interface AppState {
  disciplines: DisciplineState,
}
