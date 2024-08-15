import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap } from "rxjs/operators";
import { AuthActions } from "./auth.actions";
import { of } from "rxjs";
import { AuthService } from "src/app/shared/services/auth.service";
import { EndpointService } from "src/app/core/http/endpoint.service";

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      mergeMap((action) =>
        this.EndpointService.user()
          .login(action.body)
          .pipe(
            map((user) => AuthActions.loginSuccess({ user })),
            catchError((error) => of(AuthActions.loginFailure({ error }))),
          ),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private EndpointService: EndpointService,
  ) {}
}
