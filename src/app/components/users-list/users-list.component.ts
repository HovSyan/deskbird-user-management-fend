import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { Store } from '@ngrx/store';
import { usersListSelector } from '../../state/users-list/users-list.selectors';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { authUserSelector } from '../../state/auth/auth.selectors';
import { UserRoles } from '../../constants';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';
import { User } from '../../services/user';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { UserDeleteDialogComponent } from '../user-delete-dialog/user-delete-dialog.component';
import { InputText } from 'primeng/inputtext';

@Component({
    selector: 'app-users-list',
    imports: [
        TableModule,
        CommonModule,
        ButtonModule,
        UserDialogComponent,
        MenuModule,
        UserDeleteDialogComponent,
        IconFieldModule,
        InputIconModule,
        InputText,
    ],
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
    private _store = inject(Store);

    /**
     * IDK, maybe it's better to move it to the global state
     */
    searchTerm$ = new BehaviorSubject('');
    users$ = combineLatest([
        this._store.select(usersListSelector),
        this.searchTerm$.pipe(map((t) => t.toLowerCase())),
    ]).pipe(
        map(
            ([{ list }, searchTerm]) =>
                list?.filter((u) => filterUser(u, searchTerm)) || []
        )
    );
    isAdmin$ = this._store
        .select(authUserSelector)
        .pipe(map((u) => u?.role.id === UserRoles.ADMIN));

    editDialog = null as null | { user: User | null };
    deleteDialog = null as null | User;
    menuItems: MenuItem[] = [
        {
            label: 'Edit',
            icon: 'pi pi-user-edit',
            onClick: (user: User) => (this.editDialog = { user }),
        },
        {
            label: 'Delete',
            icon: 'pi pi-times-circle',
            onClick: (user: User) => (this.deleteDialog = user),
        },
    ];
}

function filterUser(u: User, term: string) {
    return Object.values(u).some(
        (v) => typeof v === 'string' && v.toLowerCase().includes(term)
    );
}
