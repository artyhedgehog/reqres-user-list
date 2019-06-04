import { Action } from '@ngrx/store';

import { UserListState } from './user-list.models';
import { UserListActionType, UserListFetchSuccess } from './user-list.actions';

export const userListInitialState: UserListState = {
  items: [],
  total: 0,
};

export function userListReducer(state: UserListState = userListInitialState, action: Action): UserListState {
  switch (action.type) {
    case UserListActionType.FETCH_SUCCESS: {
      const { payload } = action as UserListFetchSuccess;
      const { total, items } = payload as UserListState;

      return {
        ...state,
        items: items,
        total: total,
      };
    }
    default:
      return state;
  }
}
