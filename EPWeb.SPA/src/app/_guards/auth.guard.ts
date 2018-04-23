import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  /* Checks if signed user has any permission to access the application */

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    
    if (this.authService.loggedIn()) {
      return true;
    }

    this.router.navigate(['/auth']);
    return false;
  }
}