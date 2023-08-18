import { Action } from '../types/Actions';
import { State } from '../types/types';

export type Context = {
  state: State;
  dispatch: React.Dispatch<Action>;
};
