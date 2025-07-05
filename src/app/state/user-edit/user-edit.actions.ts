import { createAction, props } from "@ngrx/store"
import { CreateNewUser } from "../../services/user"
import { CustomError } from "../../utils/custom-error"

export const createUserAction = createAction(
    '[Users List] Create A User',
    props<CreateNewUser>()
)

export const editUserAction = createAction(
    '[Users List] Edit A User',
    props<Omit<CreateNewUser, 'password'>>()
)

export const editUserSuccess = createAction(
    '[API] Create/Edit User Success',
)

export const editUserError = createAction(
    '[API] Create/Edit User Error',
    props<CustomError>()
)
