import { createAction, props } from "@ngrx/store";

export const AUTH_ACTIONS = {
  LOGIN: "[Login Page] User Login",
  LOGIN_SUCCESS: "[Auth Api] Login Success",
  LOGIN_FAILURE: "[Auth Api] Login Failure",
};

export const AuthActions = {
  login: createAction(AUTH_ACTIONS.LOGIN, props<{ body: any }>()),
  loginSuccess: createAction(
    AUTH_ACTIONS.LOGIN_SUCCESS,
    props<{ user: any }>(),
  ),
  loginFailure: createAction(
    AUTH_ACTIONS.LOGIN_FAILURE,
    props<{ error: string }>(),
  ),
};

// export const loginFailure = createAction(
//   '[Auth API] Login Failure',
//   props<{ error: any }>() // Define 'error' according to your error model
// );
