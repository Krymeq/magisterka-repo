import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { DisciplinesActions, disciplinesFetched } from "./disciplines.actions";
import { map, mergeMap } from "rxjs";
import { ApiService } from "../../api/api.service";

@Injectable()
export class DisciplinesEffects {
  constructor(private actions$: Actions, private dataService: ApiService) {
  }

  loadDisciplines$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DisciplinesActions.FETCH_DISCIPLINES),
      mergeMap(() =>
        this.dataService.getDisciplines().pipe(
          map(disciplines => disciplinesFetched({ disciplines }))
        )
      )
    )
  )
}
