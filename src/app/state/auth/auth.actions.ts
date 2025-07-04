import { createAction, props } from '@ngrx/store';
import { Credentials, User } from '../../services/user';
import { CustomError } from '../../utils/custom-error';

export const loginAction = createAction(
    '[Login Page] Login',
    props<Credentials>()
);

export const loginSuccessAction = createAction(
    '[API] Login Success',
    props<User>()
);

export const loginErrorAction = createAction(
    '[API] Login Error',
    props<CustomError>()
);

export const userLoadAction = createAction(
    '[API] user load',
    props<User>()
);

export const logoutAction = createAction(
    '[User profile] logout',
)

export const logoutSuccessAction = createAction(
    '[API] Logout Success'
)

export const logoutErrorAction = createAction(
    '[API] Logout Failed',
    props<CustomError>()
)