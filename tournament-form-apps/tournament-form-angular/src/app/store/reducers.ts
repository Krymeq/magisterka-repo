import {disciplinesReducer} from "./disciplines/disciplines.reducer";
import {DisciplineState} from "./disciplines/disciplines.state";
import { tournamentsReducer } from "./tournaments/tournaments.reducer";
import { TournamentState } from "./tournaments/tournaments.state";

export const reducers = {
  disciplines: disciplinesReducer,
  tournaments: tournamentsReducer,
}

export interface AppState {
  disciplines: DisciplineState,
  tournaments: TournamentState,
}
