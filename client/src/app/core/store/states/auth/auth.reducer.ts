// src/app/auth.reducer.ts
import { createReducer, on } from "@ngrx/store";
import { AuthActions } from "./auth.actions";

export interface AuthState {
  isAuthenticated: boolean;
  user: any; // Define a more specific type based on your user model
  error: any; // To handle login failure errors
}

export const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  error: null,
};
// Define the reducerMap object with actual functions
export const reducerMap: any = {
  login: (state, { user }) => ({
    ...state,
    isAuthenticated: true,
    user,
    error: null,
  }),
  loginSuccess: (state, { user }) => ({
    ...state,
    isAuthenticated: true,
    user,
    error: null,
  }),
  loginFailure: (state, { error }) => ({
    ...state,
    isAuthenticated: false,
    user: null,
    error,
  }),
  // Other reducer functions can be added here
};

// Use the reducerMap functions in the authReducer
export const _reducer = createReducer(
  initialState,
  on(AuthActions.login, reducerMap.loginSuccess),
  on(AuthActions.loginSuccess, reducerMap.loginSuccess),
  on(AuthActions.loginFailure, reducerMap.loginFailure),
  // Add other action handlers here
);
// export interface CounterState {
//   count: number;
// }
export function AuthReducer(state, action) {
  return _reducer(state, action);
}

// export const initialState: CounterState = {
//   count: 0,
// };

// export const counterReducer = createReducer(
//   initialState,
//   on(increment, (state) => ({ ...state, count: state.count + 1 })),
//   on(decrement, (state) => ({ ...state, count: state.count - 1 })),
//   on(reset, (state) => ({ ...state, count: 0 })),
// );
