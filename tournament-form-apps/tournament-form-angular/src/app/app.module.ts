import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import {DisciplinesModule} from "./pages/disciplines/disciplines.module";
import {reducers} from "./store/reducers";
import {EffectsModule} from "@ngrx/effects";
import {DisciplinesEffects} from "./store/disciplines/disciplines.effects";
import {HttpClientModule} from "@angular/common/http";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";
import {CommonModule} from "@angular/common";
import { TournamentsEffects } from './store/tournaments/tournaments.effects';
import { TournamentsModule } from './pages/tournaments/tournaments.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DisciplinesModule,
    TournamentsModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([
      DisciplinesEffects,
      TournamentsEffects,
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
