import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Store } from '@ngrx/store';
import { usersListSelector } from '../../state/users-list/users-list.selectors';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-users-list',
    imports: [TableModule, CommonModule],
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
    private _store = inject(Store);

    user$ = this._store.select(usersListSelector).pipe(map(({ list }) => list!));
}
