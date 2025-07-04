import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const usersListSelector = createSelector(
    ({ usersList }: AppState) => usersList,
    (usersListState) => usersListState
)