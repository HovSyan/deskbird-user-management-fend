import { createReducer, on } from "@ngrx/store";
import { createUserAction, editUserAction, editUserError, editUserSuccess } from "./user-edit.actions";

export type UserEditState = {
    saving: boolean;
}

const initial: UserEditState = {
    saving: false
}

export const userEditReducer = createReducer(
    initial,
    on(createUserAction, editUserAction, () => ({ saving: true })),
    on(editUserSuccess, editUserError, () => ({ saving: false }))
)
