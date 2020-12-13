import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

@NgModule({
  declarations: [AppComponent, PokemonComponent, PokemonDetailComponent, PokemonListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    BrowserAnimationsModule,
    MatGridListModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    NgxChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
