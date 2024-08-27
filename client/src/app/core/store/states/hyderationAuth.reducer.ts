import { ActionReducer, INIT, UPDATE } from "@ngrx/store";
import { AuthState } from "./auth/auth.reducer";

export function hydrationMetaReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return (state, action) => {
    // Load the state from localStorage when the app starts or updates
    if (action.type === INIT || action.type === UPDATE) {
      const storageValue = localStorage.getItem("authState");
      if (storageValue) {
        try {
          return {
            ...state,
            auth: JSON.parse(storageValue) as AuthState,
          };
        } catch {
          localStorage.removeItem("authState");
        }
      }
    }

    // Run the reducer to get the next state
    const nextState = reducer(state, action);

    // Save the state to localStorage whenever it changes
    localStorage.setItem("authState", JSON.stringify(nextState.auth));

    return nextState;
  };
}
