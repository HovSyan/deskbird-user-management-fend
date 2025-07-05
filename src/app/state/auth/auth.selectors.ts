import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const authLoadingSelector = createSelector(
    ({ auth }: AppState) => auth,
    ({ loading }) => loading
)

export const authUserSelector = createSelector(
    ({ auth }: AppState) => auth,
    ({ user }) => user
)

