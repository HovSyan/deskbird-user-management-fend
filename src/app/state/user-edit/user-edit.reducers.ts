import { createReducer, on } from "@ngrx/store";
import { createUserAction, deleteUserAction, editUserAction, editUserError, editUserSuccess } from "./user-edit.actions";

export type UserEditState = {
    saving: boolean;
    deleting: boolean;
}

const initial: UserEditState = {
    saving: false,
    deleting: false,
}

export const userEditReducer = createReducer(
    initial,
    on(createUserAction, editUserAction, (state) => ({ ...state, saving: true })),
    on(deleteUserAction, (state) => ({ ...state, deleting: true })),
    on(editUserSuccess, editUserError, () => ({ saving: false, deleting: false })),
)
