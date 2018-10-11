import {Routes} from "@angular/router";
import {FoodComponent} from "../food/food.component";


export const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'food'
  },
  {
    path: 'food', component: FoodComponent
  }];
