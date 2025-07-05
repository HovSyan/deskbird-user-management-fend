import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { Store } from '@ngrx/store';
import { usersListSelector } from '../../state/users-list/users-list.selectors';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { authUserSelector } from '../../state/auth/auth.selectors';
import { UserRoles } from '../../constants';
import { UserDialogComponent } from "../user-dialog/user-dialog.component";
import { User } from '../../services/user';

@Component({
    selector: 'app-users-list',
    imports: [TableModule, CommonModule, ButtonModule, UserDialogComponent],
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
    private _store = inject(Store);

    user$ = this._store.select(usersListSelector).pipe(map(({ list }) => list!));
    isAdmin$ = this._store.select(authUserSelector).pipe((map((u) => u?.role.id === UserRoles.ADMIN)));

    dialog = null as null | { user: User | null; mode: 'view' | 'edit' }
}
