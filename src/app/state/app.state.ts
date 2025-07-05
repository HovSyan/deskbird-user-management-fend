import { AuthState } from './auth/auth.reducers';
import { UserEditState } from './user-edit/user-edit.reducers';
import { UsersListState } from './users-list/users-list.reducers';

export type AppState = {
    auth: AuthState;
    usersList: UsersListState;
    userEdit: UserEditState;
};
