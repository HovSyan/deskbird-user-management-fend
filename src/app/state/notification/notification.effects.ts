import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loginErrorAction } from '../auth/auth.actions';
import { editUserError } from '../user-edit/user-edit.actions';

@Injectable()
export class NotificationEffects {
    private _actions = inject(Actions);

    errorNotificationEffect$ = createEffect(
        () => this._actions.pipe(ofType(loginErrorAction, editUserError)),
        { dispatch: false }
    );
}
