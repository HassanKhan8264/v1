import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable, map } from "rxjs";
import { AuthService } from "../../shared/services/auth.service"; // Adjust the import path as necessary

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.isAuthenticated().pipe(
      map((response: any) => {
        if (response.authenticated) {
          return true; // User is authenticated
        } else {
          this.router.navigate(["/login"]); // Redirect to login if not authenticated
          return false;
        }
      })
    );
  }
}
