import { createReducer, on } from '@ngrx/store';
import { User } from '../../services/user';
import { loadUsersAction, loadUsersErrorAction, loadUsersSuccessAction } from './users-list.actions';
import { CustomError } from '../../utils/custom-error';

export type UsersListState = {
    list: User[] | null;
    loading: boolean;
    error: CustomError | null;
};

const initial: UsersListState = {
    list: null,
    loading: false,
    error: null,
};

export const usersListReducer = createReducer(
    initial,
    on(loadUsersAction, () => ({ list: null, error: null, loading: true })),
    on(loadUsersSuccessAction, (_, { list }) => ({ error: null, loading: false, list })),
    on(loadUsersErrorAction, (_, error) => ({ list: null, error, loading: false }))
)