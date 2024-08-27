import { ActionReducer, INIT, UPDATE } from "@ngrx/store";
import { CounterState } from "./counter/counter.reducer"; // Adjust path to your reducer

export function hydrationCounterMetaReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return (state, action) => {
    // Load the state from localStorage when the app starts or updates
    if (action.type === INIT || action.type === UPDATE) {
      const storageValue = localStorage.getItem("counterState");
      if (storageValue) {
        try {
          return {
            ...state,
            counter: JSON.parse(storageValue) as CounterState,
          };
        } catch {
          localStorage.removeItem("counterState");
        }
      }
    }

    // Run the reducer to get the next state
    const nextState = reducer(state, action);

    // Save the state to localStorage whenever it changes
    localStorage.setItem("counterState", JSON.stringify(nextState.counter));

    return nextState;
  };
}
