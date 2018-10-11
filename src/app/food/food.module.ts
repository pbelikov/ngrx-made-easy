import {NgModule} from "@angular/core";
import {FoodComponent} from "./food.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {FoodService} from './food.service';

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [
    FoodComponent
  ],
  providers: [
    FoodService
  ]
})
export class FoodModule {

}
