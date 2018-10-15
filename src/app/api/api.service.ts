import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/index';


@Injectable()
export class ApiService {
  constructor() {

  }

  run(foodName: string) {
    return Observable.create(observer => {
      observer.next(foodName ? foodName.toUpperCase() : 'NO FOOD :(');
    });
  }
}
