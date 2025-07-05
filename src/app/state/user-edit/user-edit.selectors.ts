import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { UserEditState } from './user-edit.reducers';

export const userEditSavingSelector = createSelector(
    ({ userEdit }: AppState) => userEdit,
    ({ saving }: UserEditState) => saving
);

export const userDeletingSelector = createSelector(
    ({ userEdit }: AppState) => userEdit,
    ({ deleting }: UserEditState) => deleting
);
