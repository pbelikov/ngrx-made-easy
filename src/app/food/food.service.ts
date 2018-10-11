import {Injectable} from "@angular/core";
import {select, Store} from '@ngrx/store';
import * as fromRoot from '../store';
import {Food} from '../models/food.model';
import {Observable} from 'rxjs/index';
import {CreateFood, RemoveFood} from '../store/food/actions/food.actions';

@Injectable()
export class FoodService {
  public foods$: Observable<Food[]>;

  constructor(private store: Store<fromRoot.State>) {
    this.foods$ = store.pipe(select(fromRoot.getFoods));
  }

  public createFood(foodName: string) {
    this.store.dispatch(new CreateFood({id: 0, name: foodName, description: 'aaa', amount: 5}));
  }

  public removeFood(food: Food) {
    this.store.dispatch(new RemoveFood(food.id));
  }
}
