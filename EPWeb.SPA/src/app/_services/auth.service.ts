import { AuthUser } from './../_models/user/AuthUser';
import { User } from './../_models/user/User';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { UserForRegistration } from '../_models/user/UserForRegistration';
import { ApiVersion } from '../_models/system/apiVersion';

@Injectable()
export class AuthService {

    /* Service responsible for register, login and managing localstorage items such as token, user, roles. 
    This service also returns boolens if users token is valid or not or if given user is Admin, Super Admin or Normal user */

    private baseUrl = environment.apiUrl;
    private ngSystemVersion = environment.ngVersion;
    userRoles: string[];
    currentUser: User;
    userToken: any;
    decodedToken: any;

    constructor(private http: HttpClient, private jwtHelperService: JwtHelperService) { }

    /* Sign-in to the system (called in auth.component.ts), returns JWT Token, User object and Role array, stores those variables and stores them also in browser localstorage */
    login(model: any) {
        return this.http.post<AuthUser>(this.baseUrl + 'auth/login', model, {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/json')
        })
            .map(user => {
                if (user) {
                    localStorage.setItem('token', user.tokenString);
                    localStorage.setItem('user', JSON.stringify(user.user));
                    localStorage.setItem('roles', JSON.stringify(user.roles));
                    this.decodedToken = this.jwtHelperService.decodeToken(user.tokenString);
                    this.currentUser = user.user;
                    this.userToken = user.tokenString;
                    this.userRoles = user.roles;
                }});
    }

    /* Register user (called in auth.component.ts), can return errors such as Email Adress is already taken or Username is already taken */
    register(user: UserForRegistration) {
        return this.http.post(this.baseUrl + 'auth/register', user, { headers: new HttpHeaders()
                .set('Content-Type', 'application/json')});
    }

    /* Gets system version of API and displays this information on the bottom, only on larger screens */
    getApiSystemVersion() {
        return this.http.get<ApiVersion>(this.baseUrl + 'admin/version');
    }

    /* Gets system version of Angular and displays this information on the bottom, only on larger screens */
    getNgSystemVersion() {
        return this.ngSystemVersion;
    }

    /* Returns boolean representing information about user logged-in status */
    loggedIn() {
        const token = this.jwtHelperService.tokenGetter();
        if (!token) {
            return false;
        }
        return !this.jwtHelperService.isTokenExpired(token);
    }

    /* Returns boolean representing information if given user has 'Admin user' role */
    isAdmin() {
        return (this.userRoles.indexOf('Admin user') > -1)
    }

    /* Returns boolean representing information if given user has 'Super Admin user' role */
    isSuperAdmin() {
        return (this.userRoles.indexOf('Super Admin user') > -1)
    }

}