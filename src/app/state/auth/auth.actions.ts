import { createAction, props } from '@ngrx/store';
import { Credentials, LoginResponse } from '../../services/user';
import { AxiosError } from 'axios';
import { CustomError } from '../../utils/custom-error';

export const loginAction = createAction(
  '[Login Page] Login',
  props<Credentials>()
);

export const loginSuccessAction = createAction(
  '[API] Login Success',
  props<LoginResponse>()
);

export const loginErrorAction = createAction(
  '[API] Login Error',
  props<CustomError>()
);

export const logoutAction = createAction('[Protected Page] Logout');
