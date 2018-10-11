import {Injectable} from '@angular/core';
import {interval} from 'rxjs/index';

@Injectable()
export class ApiService {
  constructor(private http: HttpCli) {
    // TODO PB I need to mock some service that will emit side-effects (most likely it will be just a plain observable interval/timer)
    interval()
  }
}
