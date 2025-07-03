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
