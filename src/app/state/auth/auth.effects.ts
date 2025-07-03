import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loginAction,
  loginErrorAction,
  loginSuccessAction,
} from './auth.actions';
import { UserService } from '../../services/user/user.service';
import { catchError, from, map, of, switchMap, tap } from 'rxjs';
import { Router } from '@angular/router';
import { CustomError } from '../../utils/custom-error';

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
          catchError((err) => of(loginErrorAction(CustomError.fromUnknown(err))))
        )
      )
    )
  );

  loginSuccessEffect$ = createEffect(() =>
    this._actions$.pipe(
      ofType(loginSuccessAction),
      tap(() => this._router.navigate(['users']))
    ),
    { dispatch: false }
  );
}
