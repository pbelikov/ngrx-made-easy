import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AppRoutingModule} from "./routes/app-routing.module";
import {FoodModule} from "./food/food.module";
import {StoreModule} from "@ngrx/store";
import {reducers} from './store';


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
     * Prepares root reducer
     */
    StoreModule.forRoot(reducers),
    /**
     * Actual application module
     */
    FoodModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
