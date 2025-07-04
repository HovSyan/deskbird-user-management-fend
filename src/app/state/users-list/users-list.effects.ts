import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
    loadUsersAction,
    loadUsersErrorAction,
    loadUsersSuccessAction,
} from './users-list.actions';
import { catchError, from, map, of, switchMap } from 'rxjs';
import { UserService } from '../../services/user';
import { CustomError } from '../../utils/custom-error';

@Injectable()
export class UsersListEffects {
    private _actions = inject(Actions);
    private _userService = inject(UserService);

    $loadUsersEffect = createEffect(() =>
        this._actions.pipe(
            ofType(loadUsersAction),
            switchMap(() =>
                from(this._userService.getAll()).pipe(
                    map(({ data }) => loadUsersSuccessAction({ list: data })),
                    catchError((err) =>
                        of(loadUsersErrorAction(CustomError.fromUnknown(err)))
                    )
                )
            )
        )
    );
}
