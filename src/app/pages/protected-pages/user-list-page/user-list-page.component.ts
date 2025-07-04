import { Component, inject, OnInit } from '@angular/core';
import { usersListSelector } from '../../../state/users-list/users-list.selectors';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { ListLoadErrorComponent } from '../../../components/list-load-error/list-load-error.component';
import { ListLoadingComponent } from "../../../components/list-loading/list-loading.component";
import { UsersListComponent } from "../../../components/users-list/users-list.component";
import { loadUsersAction } from '../../../state/users-list/users-list.actions';

@Component({
  selector: 'app-user-list-page',
  imports: [CommonModule, ListLoadErrorComponent, ListLoadingComponent, UsersListComponent],
  templateUrl: './user-list-page.component.html',
  styleUrl: './user-list-page.component.scss'
})
export class UserListPageComponent implements OnInit {
    private _store = inject(Store);
    
    usersListState$ = this._store.select(usersListSelector);

    ngOnInit(): void {
        this._store.dispatch(loadUsersAction())
    }
}
