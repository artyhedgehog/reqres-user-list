import { UserListState } from './store/user-list/user-list.models';

export enum StoreFeature {
  USER_LIST = 'userList'
}

export interface AppState {
  [StoreFeature.USER_LIST]: UserListState;
}
