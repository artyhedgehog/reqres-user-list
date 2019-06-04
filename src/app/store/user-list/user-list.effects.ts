import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { UserListActionType, UserListFetch, UserListFetchSuccess } from './user-list.actions';
import { UserApiModel } from '../../api/users/users-api.models';
import { UserListState } from './user-list.models';

@Injectable()
export class UserListEffects {
  @Effect()
  public userListFetch$: Observable<UserListFetchSuccess> = this.actions$.pipe(
    ofType<UserListFetch>(UserListActionType.FETCH),
    map(action => action.page),
    switchMap((page: number) => this.http.get(`https://reqres.in/api/users?page=${page + 1}`).pipe(
      map((response: { data: UserApiModel[], total: number }): UserListState => ({
        items: response.data,
        total: response.total,
      })),
      map(payload => new UserListFetchSuccess(payload))
    )),
  );

  public constructor(
    private actions$: Actions,
    private http: HttpClient,
  ) {}
}
