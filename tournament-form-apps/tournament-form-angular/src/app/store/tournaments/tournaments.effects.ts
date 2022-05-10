import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap, tap } from "rxjs";
import { ApiService } from "../../api/api.service";
import {
  FetchTournamentPayload,
  TournamentsActions,
  tournamentsFetched 
} from "./tournaments.actions";

@Injectable()
export class TournamentsEffects {
  fetchTournaments$ = createEffect(() => 
    this.actions$.pipe(
      ofType(TournamentsActions.FETCH_TOURNAMENTS),
      switchMap(({payload}: {payload: FetchTournamentPayload}) => 
        this.dataService.getTournaments(payload.disciplineId, payload.page).pipe(
          map(result => tournamentsFetched({payload: result}))
        )
      ),
    ),
  );
  constructor(private actions$: Actions, private dataService: ApiService) { }
}