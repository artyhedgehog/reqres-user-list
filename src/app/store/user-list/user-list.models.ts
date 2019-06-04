import { UserApiModel } from '../../api/users/users-api.models';

export interface UserListState {
  items: UserApiModel[];
  total: number;
}
