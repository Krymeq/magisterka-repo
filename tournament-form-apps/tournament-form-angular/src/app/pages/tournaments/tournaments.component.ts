import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Tournament } from "src/app/domain/Tournament";
import { AppState } from "src/app/store/reducers";
import { fetchTournaments, selectTournament } from "src/app/store/tournaments/tournaments.actions";
import { getSelectedTournament, selectTournaments } from "src/app/store/tournaments/tournaments.state";

@Component({
  template: `
    <div class="tournament-container">
      <app-apply-form *ngIf="this.selectedTournament$ | async"></app-apply-form>
      <div class="page-control">
        <button 
          class="control-button"
          (click)="this.setPage(this.page + 1)"
        >+1</button>
        <button 
          *ngIf="this.page > 1"
          class="control-button"
          (click)="this.setPage(this.page - 1)"
        >-1
        </button>
        <span>Current page: {{this.page}}</span>
      </div>

      <div *ngFor="let tournament of tournaments$ | async"
        class="tournament-node"  
      >
        <span>{{tournament.name}}</span>
        <button class="apply-button" (click)="this.selectTournament(tournament.id)">Sign in</button>
      </div>
    </div>
  `,
  styleUrls: ['./tournaments.component.scss']
})
export class TournamentsComponent implements OnInit {
  page: number = 1;
  tournaments$: Observable<Tournament[]>;
  selectedTournament$: Observable<Tournament | undefined>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {
    this.tournaments$ = this.store.select(selectTournaments);
    this.selectedTournament$ = this.store.select(getSelectedTournament);
  }

  ngOnInit(): void {
    this.loadTournaments();
  }

  setPage(page: number) {
    this.page = page;
    this.loadTournaments();
  }

  loadTournaments(): void {
    const id = this.route.snapshot.paramMap.get('id') || '1';
    this.store.dispatch(
      fetchTournaments({
        payload: {
          page: this.page,
          disciplineId: parseInt(id)
        }
      }
    ));
  }

  selectTournament(id: number) {
    this.store.dispatch(selectTournament({payload: id}))
  }
}