import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../../store/reducers";
import { fetchDisciplines } from "../../store/disciplines/disciplines.actions";
import { Observable } from "rxjs";
import { selectDisciplines } from "../../store/disciplines/disciplines.state";
import { Discipline } from "../../domain/Discipline";

@Component({
  template: `
    <div class="page-root">
      <div class="link-root" *ngFor="let discipline of disciplines$ | async">
        <a
          class="discipline-link" 
          [routerLink]="['/disciplines/' + discipline.id + '/tournaments']"
        >
          {{discipline.name}}
        </a>
      <div>
    </div>
  `,
  selector: 'app-disciplines',
  styleUrls: ['disciplines.component.scss'],
})
export class DisciplinesComponent implements OnInit {
  disciplines$: Observable<Discipline[]>;
  constructor(private store: Store<AppState>) {
    this.disciplines$ = this.store.select(selectDisciplines);
  }

  ngOnInit() {
    this.store.dispatch(fetchDisciplines())
  }
}
