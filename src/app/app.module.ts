import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AppRoutingModule} from "./routes/app-routing.module";
import {FoodModule} from "./food/food.module";
import {StoreModule} from "@ngrx/store";
import {reducers, rootEffects} from './store';
import {EffectsModule} from '@ngrx/effects';
import {ApiModule} from './api/api.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    /**
     * Invokes RouterModule for navigation
     */
    AppRoutingModule,
    /**
     * Prepares root reducer and inits the store
     */
    StoreModule.forRoot(reducers),
    /**
     * Effects
     */
    EffectsModule.forRoot(rootEffects),
    /**
     * API
     */
    ApiModule,
    /**
     * Actual application module
     */
    FoodModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
