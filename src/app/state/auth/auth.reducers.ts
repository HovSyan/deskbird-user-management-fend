import { AxiosError } from 'axios';
import { User } from '../../services/user';
import { createReducer, on } from '@ngrx/store';
import {
    userLoadAction,
    loginAction,
    loginErrorAction,
    loginSuccessAction,
} from './auth.actions';
import { CustomError } from '../../utils/custom-error';

export type AuthState = {
    user: User | null;
    loading: boolean;
    error: CustomError | null;
};

const initial: AuthState = {
    user: null,
    loading: false,
    error: null,
};

export const authReducer = createReducer(
    initial,
    on(loginAction, (state) => ({ ...state, loading: true })),
    on(loginSuccessAction, (_, user) => ({
        user,
        error: null,
        loading: false,
    })),
    on(loginErrorAction, (state, error) => ({
        ...state,
        error,
        loading: false,
    })),
    on(userLoadAction, (state, user) => ({ ...state, user }))
);
