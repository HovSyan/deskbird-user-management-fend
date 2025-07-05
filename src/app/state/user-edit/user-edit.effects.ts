import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../../services/user';
import {
    createUserAction,
    editUserError,
    editUserSuccess,
} from './user-edit.actions';
import { catchError, from, map, of, switchMap } from 'rxjs';
import { CustomError } from '../../utils/custom-error';
import { loadUsersAction } from '../users-list/users-list.actions';

@Injectable()
export class UserEditEffects {
    private _actions = inject(Actions);
    private _userService = inject(UserService);

    $createUserEffect = createEffect(() =>
        this._actions.pipe(
            ofType(createUserAction),
            switchMap((u) =>
                from(this._userService.registerUser(u)).pipe(
                    map(() => editUserSuccess()),
                    catchError((e) =>
                        of(editUserError(CustomError.fromUnknown(e)))
                    )
                )
            )
        )
    );

    $editUserSuccessEffect = createEffect(() =>
        this._actions.pipe(
            ofType(editUserSuccess),
            map(() => loadUsersAction())
        )
    );
}
