import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.reducer";

export const AUTHENTICATION = "auth";

const selectAuthStates = createFeatureSelector<AuthState>(AUTHENTICATION);
