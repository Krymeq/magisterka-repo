import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DisciplinesComponent} from "./pages/disciplines/disciplines.component";
import { TournamentsComponent } from './pages/tournaments/tournaments.component';

const routes: Routes = [
  { path: 'disciplines', component: DisciplinesComponent },
  { path: 'disciplines/:id/tournaments', component: TournamentsComponent},
  { path: '**', redirectTo: 'disciplines', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
