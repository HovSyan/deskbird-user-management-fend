import { User } from '../../services/user';
import { createReducer, on } from '@ngrx/store';
import {
    userLoadAction,
    loginAction,
    loginErrorAction,
    loginSuccessAction,
    logoutAction,
    logoutSuccessAction,
} from './auth.actions';

export type AuthState = {
    user: User | null;
    loading: boolean;
};

const initial: AuthState = {
    user: null,
    loading: false,
};

export const authReducer = createReducer(
    initial,
    on(loginAction, (state) => ({ ...state, loading: true })),
    on(loginSuccessAction, (_, user) => ({
        user,
        loading: false,
    })),
    on(loginErrorAction, (state, error) => ({
        ...state,
        loading: false,
    })),
    on(userLoadAction, (state, user) => ({ ...state, user })),
    on(logoutAction, (state) => ({ ...state, loading: true })),
    on(logoutSuccessAction, () => ({ user: null, loading: false })),
);
