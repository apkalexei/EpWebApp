import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AdminGuard implements CanActivate {

  /* Checks if signed user has 'Admin' permission to access certain parts of the application */

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    
    if (this.authService.isAdmin()) {
      return true;
    }

    this.router.navigate(['/search']);
    return false;
  }
}