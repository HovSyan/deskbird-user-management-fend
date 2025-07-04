import { createAction, props } from "@ngrx/store";
import { CustomError } from "../../utils/custom-error";
import { User } from "../../services/user";

export const loadUsersAction = createAction(
    '[Users List Page] Load Users'
)

export const loadUsersSuccessAction = createAction(
    '[API] Load Users Success',
    props<{ list: User[] }>()
)

export const loadUsersErrorAction = createAction(
    '[API] Load Users Error',
    props<CustomError>()
)