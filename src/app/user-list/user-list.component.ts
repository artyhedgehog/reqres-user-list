import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { UserApiModel } from '../api/users/users-api.models';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent {
  @Input()
  public userList: UserApiModel[];

  @Input()
  public total: number;

  @Output()
  public changePage: EventEmitter<number> = new EventEmitter();

  pageChanged(event) {
    const { pageIndex } = event;

    this.changePage.emit(pageIndex);
  }
}
