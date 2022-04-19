import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListItemComponent } from './components/ListItem/ListItem.component';
import { MainListComponent } from './components/MainList/MainList.component';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    MainListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
