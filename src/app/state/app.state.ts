import { AuthState } from './auth/auth.reducers';
import { UsersListState } from './users-list/users-list.reducers';

export type AppState = {
    auth: AuthState;
    usersList: UsersListState;
};
