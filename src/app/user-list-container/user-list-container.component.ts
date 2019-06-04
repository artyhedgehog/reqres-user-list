import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../store.models';
import { UserApiModel } from '../api/users/users-api.models';
import { selectUserListItems, selectUserListTotal } from '../store/user-list/user-list.selectors';
import { UserListFetch } from '../store/user-list/user-list.actions';

@Component({
  selector: 'app-user-list-container',
  templateUrl: './user-list-container.component.html',
  styleUrls: ['./user-list-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListContainerComponent implements OnInit {
  public userList$: Observable<UserApiModel[]>;
  public total$: Observable<number>;

  constructor(private store$: Store<AppState>) {}

  ngOnInit() {
    this.userList$ = this.store$.pipe(
      select(selectUserListItems)
    );
    this.total$ = this.store$.pipe(
      select(selectUserListTotal)
    );

    this.store$.dispatch(new UserListFetch());
  }

  public pageChanged(page: number) {
    this.store$.dispatch(new UserListFetch(page));
  }
}
