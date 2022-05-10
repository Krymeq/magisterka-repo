import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ApplyForm as ApplyFormComponent } from "./apply-form/apply-form.component";
import { TournamentsComponent } from "./tournaments.component";

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    TournamentsComponent,
    ApplyFormComponent
  ]
})
export class TournamentsModule { }
