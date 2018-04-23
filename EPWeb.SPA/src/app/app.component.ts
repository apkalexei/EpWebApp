import { AuthService } from './_services/auth.service';
import { Component, ViewChild } from '@angular/core';
import { NavigationEnd } from "@angular/router";
import { DxResponsiveBoxComponent } from "devextreme-angular/ui/responsive-box";
import { AdaptService } from './_services/adapt.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from './_models/user/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  adaptOptions: any;

  @ViewChild(DxResponsiveBoxComponent) box: DxResponsiveBoxComponent;

  constructor(private adaptService: AdaptService, private authService: AuthService, private jwtHelperService: JwtHelperService) {

    this.adaptService.adapt$.subscribe(item => {
      this.adaptOptions = this.adaptService.getOptionsForAdaptation(item);
    });

  }

  adaptation() {
    this.adaptService.setAdaptValue();
  }

  /* This method is called when app is loaded to the browser, it checks if there is any information stored in browser and if yes,
    then those variables are also stored inside of the auth.service.ts */
  ngOnInit() {
    const token = localStorage.getItem('token');
    const user: User = JSON.parse(localStorage.getItem('user'));
    const roles: string[] = JSON.parse(localStorage.getItem('roles'));

    if (token) {
      this.authService.decodedToken = this.jwtHelperService.decodeToken(token);
    }
    if (user) {
      this.authService.currentUser = user;
    }
    if (roles) {
      this.authService.userRoles = roles;
    }

  }
}
