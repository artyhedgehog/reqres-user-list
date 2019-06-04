import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState, StoreFeature } from '../../store.models';
import { UserListState } from './user-list.models';
import { UserApiModel } from '../../api/users/users-api.models';

export const selectUserListFeature = createFeatureSelector<UserListState>(StoreFeature.USER_LIST);

export const selectUserListItems = createSelector<AppState, UserListState, UserApiModel[]>(
  selectUserListFeature,
  (state: UserListState) => state.items
);

export const selectUserListTotal = createSelector<AppState, UserListState, number>(
  selectUserListFeature,
  (state: UserListState) => state.total
);
