import { NgModule } from "@angular/core";
import {DisciplinesComponent} from "./disciplines.component";
import {CommonModule} from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    DisciplinesComponent,
  ]
})
export class DisciplinesModule {  }
