import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "../auth/auth.reducer";
import { CounterState } from "./counter.reducer";

export const selectCounterState =
  createFeatureSelector<CounterState>("counter");

export const selectCount = createSelector(
  selectCounterState,
  (state) => state.count,
);
