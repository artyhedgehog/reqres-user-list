import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { UserApiModel } from '../api/users/users-api.models';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListItemComponent {
  @Input()
  public item: UserApiModel;
}
