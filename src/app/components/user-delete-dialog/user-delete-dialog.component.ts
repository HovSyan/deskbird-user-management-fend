import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { User } from '../../services/user';
import { DialogModule } from 'primeng/dialog';
import { MessageModule } from 'primeng/message';
import { DELETE_USER_CONFIRM_MSG } from '../../constants';
import { ButtonModule } from 'primeng/button';
import { Store } from '@ngrx/store';
import { userDeletingSelector } from '../../state/user-edit/user-edit.selectors';
import { deleteUserAction } from '../../state/user-edit/user-edit.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-delete-dialog',
  imports: [DialogModule, MessageModule, ButtonModule, CommonModule],
  templateUrl: './user-delete-dialog.component.html',
  styleUrl: './user-delete-dialog.component.scss'
})
export class UserDeleteDialogComponent {
    @Input({ required: true }) user!: User;

    @Output() close = new EventEmitter<void>();

    private _store = inject(Store);

    readonly MSG = DELETE_USER_CONFIRM_MSG;

    deleting$ = this._store.select(userDeletingSelector);

    processDelete() {
        this._store.dispatch(deleteUserAction(this.user));
    }
}
