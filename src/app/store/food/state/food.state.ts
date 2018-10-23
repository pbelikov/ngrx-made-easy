import {Food} from '../../../models/food.model';

export interface State {
  foods: Food[];
};

export const initialState: State = {
  foods: [
    {
      id: 5, name: 'Hotdog', amount: 5, description: 'I am very-very-very hot!'
    }
  ]
};
