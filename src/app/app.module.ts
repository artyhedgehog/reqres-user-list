import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StoreFeature } from './store.models';
import { userListReducer } from './store/user-list';
import { UserListContainerComponent } from './user-list-container/user-list-container.component';
import { UserListComponent } from './user-list/user-list.component';
import { MatCardModule, MatListModule, MatPaginatorModule } from '@angular/material';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { EffectsModule } from '@ngrx/effects';
import { UserListEffects } from './store/user-list/user-list.effects';

@NgModule({
  declarations: [
    AppComponent,
    UserListContainerComponent,
    UserListComponent,
    UserListItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(StoreFeature.USER_LIST, userListReducer),
    MatListModule,
    MatCardModule,
    HttpClientModule,
    EffectsModule.forRoot([UserListEffects]),
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
