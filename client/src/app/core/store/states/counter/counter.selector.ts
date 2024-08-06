import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../../app.state";

export const selectCounterState = (state: AppState) => state.counter;

// export const selectCounterStates = createFeatureSelector<AppState>('counter');

export const selectCount = createSelector(
  selectCounterState,
  (state) => state.count,
);
