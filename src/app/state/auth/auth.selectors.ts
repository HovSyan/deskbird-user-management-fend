import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const loginLoadingSelector = createSelector(
    ({ auth }: AppState) => auth,
    ({ loading }) => loading
)

export const loginErrorSelector = createSelector(
    ({ auth }: AppState) => auth,
    ({ error }) => error,
)

export const currentUserSelector = createSelector(
    ({ auth }: AppState) => auth,
    ({ user }) => user
)