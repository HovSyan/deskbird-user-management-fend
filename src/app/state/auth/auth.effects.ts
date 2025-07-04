import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
    loginAction,
    loginErrorAction,
    loginSuccessAction,
    logoutAction,
    logoutErrorAction,
    logoutSuccessAction,
} from './auth.actions';
import { UserService } from '../../services/user/user.service';
import { catchError, from, map, of, switchMap, tap } from 'rxjs';
import { Router } from '@angular/router';
import { CustomError } from '../../utils/custom-error';
import { LOGOUT_FAILED_ERROR_MSG } from '../../constants';

@Injectable()
export class AuthEffects {
    private _actions$ = inject(Actions);
    private _userService = inject(UserService);
    private _router = inject(Router);

    loginEffect$ = createEffect(() =>
        this._actions$.pipe(
            ofType(loginAction),
            switchMap((credentials) =>
                from(this._userService.login(credentials)).pipe(
                    map(({ data }) => loginSuccessAction(data)),
                    catchError((err) =>
                        of(loginErrorAction(CustomError.fromUnknown(err)))
                    )
                )
            )
        )
    );

    loginSuccessEffect$ = createEffect(
        () =>
            this._actions$.pipe(
                ofType(loginSuccessAction),
                tap(() => this._router.navigate(['users']))
            ),
        { dispatch: false }
    );

    logoutEffect$ = createEffect(() =>
        this._actions$.pipe(
            ofType(logoutAction),
            switchMap(() =>
                from(this._userService.logout()).pipe(
                    map(() => logoutSuccessAction()),
                    catchError(() =>
                        of(
                            logoutErrorAction(
                                new CustomError(
                                    'Logout failed',
                                    LOGOUT_FAILED_ERROR_MSG
                                )
                            )
                        )
                    )
                )
            )
        )
    );

    logoutSuccessEffect = createEffect(() =>
        this._actions$.pipe(
            ofType(logoutSuccessAction),
            tap(() => {
                this._router.navigate(['login'])
            })
        ),
        { dispatch: false }
    );
}
