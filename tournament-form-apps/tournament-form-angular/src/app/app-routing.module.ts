import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DisciplinesComponent} from "./pages/disciplines/disciplines.component";

const routes: Routes = [
  { path: 'disciplines', component: DisciplinesComponent },
  { path: '**', redirectTo: 'disciplines', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
