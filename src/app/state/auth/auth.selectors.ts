import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const authLoadingSelector = createSelector(
    ({ auth }: AppState) => auth,
    ({ loading }) => loading
)

export const authErrorSelector = createSelector(
    ({ auth }: AppState) => auth,
    ({ error }) => error,
)

export const authUserSelector = createSelector(
    ({ auth }: AppState) => auth,
    ({ user }) => user
)

