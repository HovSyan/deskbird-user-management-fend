import {
    ChangeDetectionStrategy,
    Component,
    inject,
    signal,
} from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { Store } from '@ngrx/store';
import { usersListSelector } from '../../state/users-list/users-list.selectors';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { authUserSelector } from '../../state/auth/auth.selectors';
import { DELETE_USER_CONFIRM_MSG, UserRoles } from '../../constants';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';
import { User } from '../../services/user';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { UserDeleteDialogComponent } from '../user-delete-dialog/user-delete-dialog.component';

@Component({
    selector: 'app-users-list',
    imports: [
        TableModule,
        CommonModule,
        ButtonModule,
        UserDialogComponent,
        MenuModule,
        UserDeleteDialogComponent
    ],
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
    private _store = inject(Store);

    user$ = this._store
        .select(usersListSelector)
        .pipe(map(({ list }) => list!));
    isAdmin$ = this._store
        .select(authUserSelector)
        .pipe(map((u) => u?.role.id === UserRoles.ADMIN));

    editDialog = null as null | { user: User | null };
    deleteDialog = null as null | User;
    menuItems: MenuItem[] = [
        {
            label: 'Edit',
            icon: 'pi pi-user-edit',
            onClick: (user: User) => this.editDialog = { user }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times-circle',
            onClick: (user: User) => this.deleteDialog = user
        },
    ];
}
