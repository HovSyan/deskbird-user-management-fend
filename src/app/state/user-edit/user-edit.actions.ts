import { createAction, props } from "@ngrx/store"
import { CreateNewUser, EditUser, User } from "../../services/user"
import { CustomError } from "../../utils/custom-error"

export const createUserAction = createAction(
    '[Users List] Create A User',
    props<CreateNewUser>()
)

export const editUserAction = createAction(
    '[Users List] Edit A User',
    props<EditUser & Pick<User, 'id'>>()
)

export const deleteUserAction = createAction(
    '[Users List] Delete A User',
    props<User>()
)

export const editUserSuccess = createAction(
    '[API] Create/Edit User Success',
)

export const editUserError = createAction(
    '[API] Create/Edit User Error',
    props<CustomError>()
)
