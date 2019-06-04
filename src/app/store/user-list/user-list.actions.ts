import { Action } from '@ngrx/store';
import { UserListState } from './user-list.models';

export enum UserListActionType {
  FETCH = '[user-list] Fetch',
  FETCH_SUCCESS = '[user-list] Fetch - success',
}

export class UserListFetch implements Action {
  public readonly type: string = UserListActionType.FETCH;

  constructor(public readonly page: number = 0) {}
}

export class UserListFetchSuccess implements Action {
  public readonly type: string = UserListActionType.FETCH_SUCCESS;

  constructor(public readonly payload: UserListState) {}
}
