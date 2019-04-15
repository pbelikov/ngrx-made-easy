import {Action} from '@ngrx/store';

export interface ActionExecutable<T> extends Action {
  execute: (state: T) => T;
}
